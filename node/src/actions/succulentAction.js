import { SucculentAction } from "../constants/actionTypes";
import axios from "axios";

// const transDataByTag = (list, tags) => {
//   const result = {};
//   tags.forEach(tag => {
//     result[tag] = list.filter((row) => row.tag === tag);
//   });
//   return result;
// };

const getSucculentsFromCluster = (cluster) => {
  let result = [];
  Object.values(cluster).reduce((prev, cur) => { // eslint-disable-line
    result = result.concat(cur);
  }, result);
  return result;
}

// const getSucculentTags = async () => {
//   const {data} = await axios.get('/api/succulent/tags');
//   return data;
// };

const getSucculentsByTag = (tag) => {
  return async (dispatch) => {
    const {data: cluster} = await axios.get(`/api/succulent/byTag?tag=${tag}`);
    const list = getSucculentsFromCluster(cluster);
    dispatch({
      type: SucculentAction.GET_SUCCULENTS,
      payload: {
        succulents: list,
        succulentCluster: cluster
      }
    });
  };
};

const getSucculents = () => {
  return async (dispatch) => {
    const {data: cluster} = await axios.get('/api/succulent');
    const list = getSucculentsFromCluster(cluster);
    dispatch({
      type: SucculentAction.GET_SUCCULENTS,
      payload: {
        succulents: list,
        succulentCluster: cluster
      }
    });
  };
};

const getSucculentById = (id) => {
  return {
    type: SucculentAction.GET_SUCCULENT_BY_ID,
    payload: id
  };
};

const closeOverlay = (id) => {
  return {
    type: SucculentAction.CLOSE_OVERLAY,
    payload: id
  };
};

export {
  getSucculents,
  getSucculentById,
  getSucculentsByTag,
  closeOverlay,
}