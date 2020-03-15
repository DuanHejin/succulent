import { SucculentAction } from "../constants/actionTypes";
import axios from "axios";

const transDataByTag = (list, tags) => {
  const result = {};
  tags.forEach(tag => {
    result[tag] = list.filter((row) => row.tag === tag);
  });
  return result;
};

const getSuuculentTags = async () => {
  const {data} = await axios.get('/api/succulent/tags');
  return data;
};

const getSucculents = () => {
  return async (dispatch) => {
    const {data} = await axios.get('/api/succulent');
    const copyData = data.concat(data);
    const tags = await getSuuculentTags();
    const result = transDataByTag(copyData, tags)
    dispatch({
      type: SucculentAction.GET_SUCCULENTS,
      payload: {
        succulents: copyData,
        succulentCluster: result
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
  closeOverlay,
}