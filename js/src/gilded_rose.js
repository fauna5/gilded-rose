function Item(name, sell_in, quality) {
  this.name = name;
  this.sell_in = sell_in;
  this.quality = quality;
}

var items = [];
var AGED_BRIE = 'Aged Brie';
var BACKSTAGE_PASSES = 'Backstage passes to a TAFKAL80ETC concert';
var SULFURAS = 'Sulfuras, Hand of Ragnaros';

function update_quality() {
  for (var i = 0; i < items.length; i++) {
    if (items[i].name === SULFURAS) {
      continue;
    }
    if (items[i].name === AGED_BRIE) {
      items[i] = updateBrie(items[i]);
    } else if (items[i].name === BACKSTAGE_PASSES) {
      items[i] = updateBackstagePasses(items[i]);
    } else {
      items[i] = updateStandard(items[i]);
    }
    items[i].sell_in -= 1;
  }
}

function updateBrie(brie){
  if (brie.quality < 50) {
    brie.quality += 1;
  }
  if (brie.sell_in <= 0 && brie.quality < 50) {
    brie.quality += 1;
  }
  return brie;
}

function updateBackstagePasses(pass){
  if (pass.sell_in <= 0) {
    pass.quality = 0;
  } else if(pass.quality < 50) {
    if (pass.sell_in >= 10 && pass.sell_in < 49) {
      pass.quality += 1;
    } else if (pass.sell_in >= 5 && pass.sell_in < 10) {
      pass.quality += 2;
    } else if (pass.sell_in < 5) {
      pass.quality += 3;
    }
  }
  return pass;
}

function updateStandard(item){
  if (item.quality > 0) {
    item.quality -= 1;
    if (item.sell_in <= 0 && item.quality > 0) {
      item.quality -= 1;
    }
  }
  return item;
}