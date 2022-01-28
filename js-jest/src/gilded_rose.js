class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items = []) {
    this.items = items;
  }
  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      // Cas communs -1 quality
      if (this.items[i].name != 'Aged Brie' && this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
        if (this.items[i].quality > 0) {
          if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
            if (this.items[i].name != 'Conjured') {
              this.items[i].quality = this.items[i].quality - 1;
            } else {
              // Cas spécial Conjured perte doublé
              this.items[i].quality = this.items[i].quality - 2;
            }
          }
        } else {
          // Cas spéciaux gain de qualité quotidien (Brie + BackStage)
          if (this.items[i].quality < 50) {
            this.items[i].quality = this.items[i].quality + 1;
            // Cas BackStage
            if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
              if (this.items[i].sellIn < 11) {
                if (this.items[i].quality < 50) {
                  this.items[i].quality = this.items[i].quality + 1;
                }
              }
              if (this.items[i].sellIn < 6) {
                if (this.items[i].quality < 50) {
                  this.items[i].quality = this.items[i].quality + 1;
                }
              }
            }
          }
        }
        // Ca communs SellIn < 0
        if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
          this.items[i].sellIn = this.items[i].sellIn - 1;
        }
        // Cas perte qualité supplémentaire suite a péremption
        if (this.items[i].sellIn < 0) {
          if (this.items[i].name != 'Aged Brie') {
            if (this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
              if (this.items[i].quality > 0) {
                if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
                  if(this.items[i].name != 'Conjured'){
                    this.items[i].quality = this.items[i].quality - 1;
                  }else{
                    //Cas Conjured perte double
                    this.items[i].quality = this.items[i].quality - 2;
                  }
                }
              }
            } else {
              // Cas spécial BackStage après concert
              this.items[i].quality = this.items[i].quality - this.items[i].quality;
            }
          } else {
            if (this.items[i].quality < 50) {
              this.items[i].quality = this.items[i].quality + 1;
            }
          }
        }
      }

      return this.items;
    }
  }
}

module.exports = {
  Item,
  Shop
}
