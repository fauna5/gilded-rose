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
    if (items[i].name != AGED_BRIE && items[i].name != BACKSTAGE_PASSES) {
      if (items[i].quality > 0) {
        items[i].quality = items[i].quality - 1;
      }
    } else {
      if (items[i].quality < 50) {
        items[i].quality = items[i].quality + 1;
        if (items[i].name == BACKSTAGE_PASSES) {
          if (items[i].sell_in < 11) {
            if (items[i].quality < 50) {
              items[i].quality = items[i].quality + 1;
            }
          }
          if (items[i].sell_in < 6) {
            if (items[i].quality < 50) {
              items[i].quality = items[i].quality + 1;
            }
          }
        }
      }
    }
    items[i].sell_in = items[i].sell_in - 1;
    if (items[i].sell_in < 0) {
      if (items[i].name != AGED_BRIE) {
        if (items[i].name != BACKSTAGE_PASSES) {
          if (items[i].quality > 0) {
            items[i].quality = items[i].quality - 1;
          }
        } else {
          items[i].quality = items[i].quality - items[i].quality;
        }
      } else {
        if (items[i].quality < 50) {
          items[i].quality = items[i].quality + 1;
        }
      }
    }
  }
}
