import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createDrawerNavigator} from 'react-navigation-drawer';
import Category from './pages/Category';
import Drinks from './pages/Drinks';
import Details from './pages/Details';

const createSwitchNavigatorApp = createSwitchNavigator({
  Details,
  Category,
  Drinks,
});

const Routes = createAppContainer(createSwitchNavigatorApp);

export default Routes;
