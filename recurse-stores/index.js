const _ = require('lodash');
const grossSalesSnapshot11 = require('./snapshots/grossSales11.json');
const grossSalesSnapshot12 = require('./snapshots/grossSales12.json');
const forecastVarianceSnapshot11 = require('./snapshots/forecastVariance11.json');
const forecastVarianceSnapshot12 = require('./snapshots/forecastVariance12.json');
const { getStoreHierarchy, getStoreSales, getStoreSalesForecasts } = require('./api');

async function getGrossSales(nodeId, date) {
  const [stores, storeSales] = await Promise.all([getStoreHierarchy(), getStoreSales()]);

  // iterate through all sales to find particular sales for store on a certain date
  const findStoreSales = (node) => {
    let sales = 0;
    storeSales.forEach((store) => {
      if (store.storeId === node && store.businessDay === date) sales += store.grossSales;
    });
    return sales;
  };

  // recurses through stores to find particular store and all store children
  const findStoreNode = (storeList) => {
    for (let i = 0; i < storeList.length; i += 1) {
      if (storeList[i].id === nodeId) return storeList[i];
      const storeId = storeList[i].id.toString();
      const NodeIdString = nodeId.toString();
      if (NodeIdString.startsWith(storeId) && storeList[i].childStore) {
        return findStoreNode(storeList[i]);
      }
    }
  };

  // returns a nested object of the store, and all its children's stores sales
  const recurseStores = (store) => {
    if (store.isStore) {
      const sales = findStoreSales(store.id);
      return {
        name: store.name,
        total: sales,
      };
    }
    let childStoreSales = 0;
    const childrenStores = [];
    store.children.forEach((childStore) => {
      const storeData = recurseStores(childStore);
      childrenStores.push(storeData);
      childStoreSales += storeData.total;
    });
    return {
      name: store.name,
      children: childrenStores,
      total: childStoreSales,
    };
  };

  // if root store is the store beind searched for
  if (nodeId === stores.id) return recurseStores(stores);
  // otherwise, search it's children
  const storeNode = findStoreNode(stores.children);
  return recurseStores(storeNode);
}

async function getForecastVariance(nodeId, date) {
  // TODO:
  return {};
}


// **************
// TEST FUNCTIONS
// --------------
// Expected Output:
// getGrossSales node 11 OK =true
// getGrossSales node 12 OK = true
// getForecastVariance node 11 OK = true
// getForecastVariance node 12 OK = true
// **************************************

getGrossSales(11, '2018-07-31').then(grossSales => {
    console.log("getGrossSales node 11 OK = " + _.isEqual(grossSales,grossSalesSnapshot11));
});

getGrossSales(12, '2018-08-01').then(grossSales => {
    console.log("getGrossSales node 12 OK = " + _.isEqual(grossSales,grossSalesSnapshot12));
});

getForecastVariance(11, '2018-07-31').then(forecastVariance => {
    console.log("getForecastVariance node 11 OK = " + _.isEqual(forecastVariance,forecastVarianceSnapshot11));
});

getForecastVariance(12, '2018-08-01').then(forecastVariance => {
    console.log("getForecastVariance node 12 OK = " + _.isEqual(forecastVariance,forecastVarianceSnapshot12));
});
