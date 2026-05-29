import page from "page";
import homeView from './views/home';
import layoutView  from "./views/layout";
import petsView from "./views/pets";

page(layoutView);

page("/", homeView);

page('/pets', petsView);

page();