import dispatcher from "../Dispatcher/dispatcher";

export function searchProducts(searchKey) {
  dispatcher.dispatch({
		type: "SEARCH_PRODUCTS",
		searchKey
  });
}

export function filterByRelevant(searchKey) {
  dispatcher.dispatch({
    type: "FILTER_BY_RELEVANTS",
	searchKey
  });
}

export function filterByPopular() {
	  dispatcher.dispatch({
		  type: "FILTER_BY_POPULAR"
	  });
}

export function filterByLowPrice() {
	  dispatcher.dispatch({
		type: "FILTER_BY_LOWPRICE"
	  });
}

export function filterByHighPrice() {
	  dispatcher.dispatch({
		type: "FILTER_BY_HIGHPRICE"
	  });
}

export function filterByNew() {
	  dispatcher.dispatch({
		type: "FILTER_BY_NEW"
	  });
}