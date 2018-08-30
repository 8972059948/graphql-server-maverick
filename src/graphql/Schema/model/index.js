'use strict';
import foodItemInputType   from './inputType/foodItem';
import resturentInputType  from './inputType/resturentCollection';
import foodItemOutputType  from './outputType/foodItem';
import resturentOutputType from './outputType/resturentCollection';

const graphqlModel = { foodItemInputType, foodItemOutputType, resturentOutputType, resturentInputType };

module.exports = graphqlModel;