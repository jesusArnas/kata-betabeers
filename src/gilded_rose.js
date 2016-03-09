function Item(name, sell_in, quality) {
  this.name = name;
  this.sell_in = sell_in;
  this.quality = quality;
}

var items = [];

function update_quality() {
  var item;
  for (var i = 0; i < items.length; i++) {
    item = items[i];

    updateQuality(item);
    updateSellIn(item);
  }
  
  function isAgedBrie(item) {
    return item.name == 'Aged Brie';
  }
  
  function isBackstage(item) {
    return item.name == 'Backstage passes to a TAFKAL80ETC concert';
  }
  
  function isSulfuras(item) {
    return item.name == 'Sulfuras, Hand of Ragnaros';
  }
  
  function decreaseQuality(item) {
    if (item.quality > 0)
      item.quality = item.quality - 1;
  }
  
  function increaseQuality(item) {
    if (item.quality < 50)
      item.quality = item.quality + 1;
  }

  function decreaseSellIn(item) {
    item.sell_in = item.sell_in - 1;
  }
    
  function resetQuality(item) {
    item.quality = item.quality - item.quality;
  }
  
  function updateQuality(item) {
    if (isAgedBrie(item)) {
      increaseQuality(item);
    }
    else if (isBackstage(item)) {
      increaseQuality(item);

      if (item.sell_in < 11)
        increaseQuality(item);
       
      if (item.sell_in < 6)
        increaseQuality(item);
    }
    else if (isSulfuras(item)) {
      // Nothing to do.
    }
    else {
       decreaseQuality(item);
    }
  }
  
  function updateSellIn(item) {
    if (isAgedBrie(item)) {
      decreaseSellIn(item);
      if (item.sell_in < 0)
        increaseQuality(item);
    }
    else if (isBackstage(item)) {
      decreaseSellIn(item);
      if (item.sell_in < 0)
        resetQuality(item);
    }
    else if (isSulfuras(item)) {
      // Nothing to do.
    }
    else {
       decreaseSellIn(item);
       if (item.sell_in < 0)
         decreaseQuality(item);
    }
  }
}