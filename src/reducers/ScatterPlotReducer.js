import { SCATTER_PLOT, UPDATE_WIDTH } from '../actions/ScatterPlotActions';
import ScatterPlotObject from '../templates/ScatterPlotObject';

const initialState = {
  margin: {},
  width: '',
  height: '',
  responsiveResize: '',
  axes: {},
  gridLines: {},
  regressionLine: {},
  toolTip: {},
  scatterPlot: {},
  data: []
}

export default function reducer(state = initialState, action) {

  switch (action.type) {
    case SCATTER_PLOT:
    // console.log('inside action', action.payload);
      // return state;
      return action.payload;
      // return {...state, payload: action.payload}
    case UPDATE_WIDTH:
    console.log('--this will be the new width from the reducer', action.width)
      // return {
      //   width: action.width
      // }
      return {
        ...state, width: action.width
      }
    default:
      return state;
  }
}
