const db = require('./connection');
const { User, Product, Category } = require('../models');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
  await cleanDB('Category', 'categories');
  await cleanDB('Product', 'products');
  await cleanDB('User', 'users');

  const categories = await Category.insertMany([
    { name: 'Guitar' },
    { name: 'Bass' },
    { name: 'Electronics' },
  ]);

  console.log('categories seeded');

  const products = await Product.insertMany([
    {
      name: 'CUSTOM SHOP SUPERLITE HH TELECASTER SEAFOAM GREEN W/ CASE',
      description:
        'Seafoam Green on a Superlite Paulownia body, Maple neck, Rosewood fingerboard, vintage-style custom-wound humbucking pickups with coil split and a NOS vintage paper in oil capacitor from Ukraine in the tone circuit. We used an upgraded six saddle bridge on this guitar for absolute tonal balance and intonation adjustability.',
      image: 'superlite_seafoam.jpg',
      category: categories[0]._id,
      price: 1649.00,
      quantity: 2
    },
    {
      name: 'CUSTOM SHOP SUPERLITE 71 TELE CANDY APPLE RED W/ CASE',
      description:
        'Candy Apple Red on a Superlite Paulownia body, Maple neck, Rosewood fingerboard, Vintage style Custom wound pickups and a NOS vintage paper in oil capacitor from Ukraine in the tone circuit. We used a Wilkenson bridge on this guitar for absolute tonal balance and intonation adjustability.',
      image: 'vibrawood2.jpg',
      category: categories[0]._id,
      price: 1599.00,
      quantity: 1
    },
    {
      name: 'CUSTOM SHOP SUPERLITE 69 TELE THINLINE W/ CASE',
      category: categories[0]._id,
      description:
        'Sunburst finish with a semi-hollow Alder body, Maple neck, Maple fingerboard, Vintage style Custom wound pickups and a NOS vintage paper in oil capacitor from Ukraine in the tone circuit. We used a Wilkenson bridge on this guitar for absolute tonal balance and intonation adjustability. Hardshell case included.',
      image: 'vibrawood3.jpg',
      price: 1599.00,
      quantity: 2
    },
    {
      name: 'CUSTOM SHOP 64 FIESTA RED P-BASS',
      category: categories[1]._id,
      description:
        'This is a hand made Custom Shop instrument. Custom Color Fiesta Red Superlite Paulownia body with Maple neck, Rosewood fretboard, pearl dot inlays, lightweight Hipshot tuners, and Seymour Duncan pickups and a NOS vintage paper in oil capacitor from Ukraine in the tone circuit matched to this bass guitar. Very lightweight and resonant, this bass has that open woody P-Bass sound heard on stage and in the best recordings throughout the 60s, 70s and 80s!',
      image: 'vibrawoodbass1.jpg',
      price: 1399.99,
      quantity: 4
    },
    {
      name: 'CUSTOM SHOP 69 JAZZ BASS ELECTRON BLUE METALLIC',
      category: categories[1]._id,
      description:
      'This is a hand made Custom Shop instrument. Custom Color Electron Blue Metallic Superlite Paulownia body with Maple neck, bound Rosewood fretboard, pearl block inlays, lightweight Hipshot tuners, and custom wound vintage style pickups and a NOS vintage paper in oil capacitor from Ukraine in the tone circuit matched to this bass guitar. Very lightweight and resonant, this bass has that low mid growl heard on stage and in the best recordings throughout the 60s, 70s and 80s!',
      image: 'vibrawoodbass2.jpg',
      price: 1499.99,
      quantity: 100
    },
    {
      name: 'ARTIST CUSTOM SHOP JAZZ BASS ELECTRON BLUE METALLIC',
      category: categories[1]._id,
      description:
        'This is a hand made Custom Shop instrument. Custom Color Electron Blue Metallic Superlite Paulownia body with Maple neck, Rosewood fretboard, pearl dot inlays, lightweight Hipshot tuners, and Seymour Duncan Antiquity 2 pickups and a NOS vintage paper in oil capacitor from Ukraine in the tone circuit matched to this bass guitar. Very lightweight and resonant, this bass has that low mid growl heard on stage and in the best recordings throughout the 60s, 70s and 80s!',
      image: 'vibrawoodbass3.jpg',
      price: 1399.99,
      quantity: 1
    },
    {
      name: 'CUSTOM SHOP 64 SONIC BLUE P-BASS',
      category: categories[1]._id,
      description:
        'This is a hand made Custom Shop instrument.  Custom Color Sonic Blue Superlite Paulownia body with Maple neck, Rosewood fretboard, pearl dot inlays, lightweight Hipshot tuners, and Custom wound vintage style pickups and a NOS vintage paper in oil capacitor from Ukraine in the tone circuit matched to this bass guitar. Very lightweight and resonant, this bass has that open woody P-Bass sound heard on stage and in the best recordings throughout the 60s, 70s and 80s!',
      image: 'vibrawoodbass4.jpg',
      price: 1299.99,
      quantity: 2
    },
    {
      name: 'CUSTOM SHOP 56 P BASS BLONDE',
      category: categories[1]._id,
      description:
        'This is an in-house hand made Custom Shop instrument.  This Custom Shop bass is our tribute to the 1956 Precision Bass with an Ash body finished in Blond and a Maple neck and fingerboard. This bass has custom wound stacked vintage style pickups creating a humbucking tone and a custom vintage paper in oil capacitor in the tone circuit. With a very strong and resonant voice, this bass has that open woody P-Bass sound heard on stage and in the best recordings throughout the 60s, 70s and 80s!  The blond light relic finish looks extremely classy and rich accentuated with the early large style white pick guard.  Original chrome covers over the bridge and pickup makes this bass look like a real blast from the past. The 58 style 4 saddle bridge used on this tribute bass ensure correct intonation and playability.  This bass, #100 in our series so far, is a limited run and includes a hard shell case.',
      image: 'vibrawoodbass5.jpg',
      price: 1199.99,
      quantity: 3
    },
    {
      name: 'CUSTOM SHOP 56 P BASS SUNBURST W/ CASE ',
      category: categories[1]._id,
      description: 'This is an in-house hand made Custom Shop instrument. This Custom Shop bass is our tribute to the 1956 Precision Bass with an Ash body finished in Vintage Two Tone Sunburst and a Maple neck and fingerboard. This bass has a custom wound vintage style single coil  pickup creating that legendary early P-Bass vintage tone and a NOS vintage paper in oil capacitor from Ukraine in the tone circuit. With a very strong and resonant voice, this bass has that open P-Bass sound heard on stage and in the best recordings throughout the 60s, 70s and 80s! Sting has used his early single coil P-Bass throughout his career. The Vintage Sunburst light relic finish looks extremely classy over the broad grain of the wood and is accentuated with the early large style white pick guard.  Original chrome covers over the bridge and pickup makes this bass look like a real blast from the past. The 58 style 4 saddle bridge used on this tribute bass ensures correct intonation and playability.  This bass, #101 in our series so far, is a limited run and includes a hard shell case.',
      image: 'vibrawoodbass6.jpg',
      price: 1199.99,
      quantity: 2
    },
    {
      name: 'CUSTOM SHOP 64 BLACK PRECISION BASS',
      category: categories[1]._id,
      description:
        'This is a hand made Custom Shop instrument. Custom Color Black Superlite Paulownia body with Maple neck, Rosewood fretboard, pearl dot inlays, lightweight Hipshot tuners, and Custom wound vintage style pickups and a NOS vintage paper in oil capacitor from Ukraine in the tone circuit matched to this bass guitar. Very lightweight and resonant, this bass has that open woody P-Bass sound heard on stage and in the best recordings throughout the 60s, 70s and 80s!',
      image: 'vibrawoodbass7.jpg',
      price: 1299.99,
      quantity: 2
    },
    {
      name: 'CUSTOM SHOP 65 JAZZ BASS FIESTA RED W/ CUSTOM GROWL CIRCUIT & CASE',
      category: categories[1]._id,
      description:
        'This is a hand made Custom Shop instrument. We are producing these as our version of vintage Fender instruments made in the 50s. 60s and early 70s.  Highly sought after original vintage instruments can bring well over 10,000. and taking them on stage and into studios is a serious risk. These Custom Shop instruments are light weight, resonant and have the feel, playability and tone of the old treasured instruments.   They can be used for touring and recording without the risk of loss or damage.',
      image: 'vibrawoodbass8.jpg',
      price: 1799.99,
      quantity: 4
    },
    {
      name: 'CUSTOM SHOP SUPERLITE 69 NATURAL PRECISION',
      category: categories[1]._id,
      description:
        'This is a hand made Custom Shop instrument.  Custom Color Natural Superlite Paulownia body with Maple neck, Rosewood fretboard, pearl dot inlays, lightweight Hipshot tuners, and Custom wound vintage style pickups and a NOS vintage paper in oil capacitor from Ukraine in the tone circuit matched to this bass guitar. Very lightweight and resonant, this bass has that open woody P-Bass sound heard on stage and in the best recordings throughout the 60s, 70s and 80s!',
      image: 'vibrawoodbass9.jpg',
      price: 1999.99,
      quantity: 2
    },
    {
      name: 'ARTIST CUSTOM SHOP SUPERLITE 68 P-BASS BLACK',
      category: categories[1]._id,
      description:
        'This is a hand made Custom Shop instrument. High gloss Black Superlite Paulownia body with Maple neck, Rosewood fretboard, pearl dot inlays, lightweight Hipshot tuners, and Custom wound vintage style pickups and a NOS vintage paper in oil capacitor from Ukraine in the tone circuit matched to this bass guitar. Very lightweight and resonant, this bass has that open woody P-Bass sound heard on stage and in the best recordings throughout the 60s, 70s and 80s!',
      image: 'vibrawoodbass10.jpg',
      price: 1799.99,
      quantity: 4
    },
    {
      name: 'ARTIST SUPERLITE FRETLESS JAZZ BASS VINTAGE CREAM',
      category: categories[1]._id,
      description:
        'This is a hand made Custom Shop instrument. Custom Color Vintage Cream Superlite Paulownia body with Maple neck and fingerboard, figured Koa inlays, lightweight Hipshot tuners, Seymour Duncan Apollo pickups and a NOS vintage paper in oil capacitor from Ukraine in the tone circuit matched to this bass guitar. Very lightweight and resonant, this bass has that low mid growl heard on stage and in the best recordings throughout the 60s, 70s and 80s!',
      image: 'vibrawoodbass11.jpg',
      price: 1850.00,
      quantity: 4
    },
    {
      name: 'ARTIST SUPERLITE DELUXE JAZZ BASS W/ ACTIVE ELECTRONICS',
      category: categories[1]._id,
      description:
        'This is a hand made Custom Shop instrument. Custom Color Tobacco Sunburst Superlite Paulownia body with Maple neck and fingerboard, black block inlays, lightweight Hipshot tuners, Seymour Duncan pickups and an Aguilar OBP-3 preamp allowing players to boost or cut out desired frequencies. Pickup volume is stack on the first concentric pot with Bass and Treble on the second concentric pot and Mids on the third. Very lightweight and resonant, this bass has that low mid growl heard on stage and in the best recordings throughout the 60s, 70s and 80s!',
      image: 'vibrawoodbass12.jpg',
      price: 1750.00,
      quantity: 4
    },
  ]);

  console.log('products seeded');

  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});
