import { NewProductProps } from "../pages/Games";

export default function compare(game1: NewProductProps, game2: NewProductProps) {
  if(Boolean(game1.order) === true) {
    if(game1.sorter === 'name') {
      if(game1.name < game2.name) {
        return -1;
      }
      else if(game1.name > game2.name) {
        return 1;
      }
      return 0;
    }
    else if(game1.sorter === 'price') {
      if(game1.price < game2.price) {
        return -1;
      }
      else if(game1.price > game2.price) {
        return 1;
      }
      return 0;
    }
    else {
      if(game1.score < game2.score) {
        return -1;
      }
      else if(game1.score > game2.score) {
        return 1;
      }
      return 0;
    }
  }
  else {
    if(game1.sorter === 'name') {
      if(game1.name > game2.name) {
        return -1;
      }
      else if(game1.name < game2.name) {
        return 1;
      }
      return 0;
    }
    else if(game1.sorter === 'price') {
      if(game1.price > game2.price) {
        return -1;
      }
      else if(game1.price < game2.price) {
        return 1;
      }
      return 0;
    }
    else {
      if(game1.score > game2.score) {
        return -1;
      }
      else if(game1.score < game2.score) {
        return 1;
      }
      return 0;
    }
  }
}
