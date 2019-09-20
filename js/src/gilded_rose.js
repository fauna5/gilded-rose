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

    if (items[i].name === BACKSTAGE_PASSES) {
      if(items[i].quality < 50) {
        if (items[i].sell_in >= 10 && items[i].sell_in < 49) {
          items[i].quality += 1;
        } else if (items[i].sell_in >= 5 && items[i].sell_in < 10) {
          items[i].quality += 2;
        } else if (items[i].sell_in < 5) {
          items[i].quality += 3;
        }
      }
    } else if (items[i].name === AGED_BRIE) {
      if (items[i].quality < 50) {
        items[i].quality += 1;
      }
    } else {
      if (items[i].quality > 0) {
        items[i].quality -= 1;
      }
    }

    if (items[i].sell_in <= 0) {
      if (items[i].name === BACKSTAGE_PASSES) {
        items[i].quality = 0;
      } else if (items[i].name === AGED_BRIE) {
        if (items[i].quality < 50) {
          items[i].quality += 1;
        }
      } else {
        if (items[i].quality > 0) {
          items[i].quality -= 1;
        }
      }
    }

    items[i].sell_in = items[i].sell_in - 1;
  }
}
