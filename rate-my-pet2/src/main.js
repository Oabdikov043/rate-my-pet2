import page from "page";
import homeView from './views/home';
import layoutView  from "./views/layout";
import petsView from "./views/pets";
import loginView from "./views/login";

page(layoutView);

page("/", homeView);

page('/pets', petsView);

page("/login", loginView);

page();