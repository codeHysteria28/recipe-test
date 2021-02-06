export const categories = [
  {
    id: 3,
    name: 'Cookies',
    photo_url:
    'https://www.telegraph.co.uk/content/dam/Travel/2019/January/france-food.jpg?imwidth=1400'
  },
  {
    id: 1,
    name: 'Mexican Food',
    photo_url: 'https://ak1.picdn.net/shutterstock/videos/19498861/thumb/1.jpg'
  },
  {
    id: 2,
    name: 'Italian Food',
    photo_url:
      'https://images.unsplash.com/photo-1533777324565-a040eb52facd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
  },
  {
    id: 4,
    name: 'Smoothies',
    photo_url:
    'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/still-life-of-three-fresh-smoothies-in-front-of-royalty-free-image-561093647-1544042068.jpg?crop=0.715xw:0.534xh;0.0945xw,0.451xh&resize=768:*'
  },
  {
    id: 0,
    name: 'Pizza',
    photo_url: 'https://wallpaperboat.com/wp-content/uploads/2020/08/13/52628/pizza-20-728x410.jpg'
  },
];

export const recipes = [
  {
    recipeId: 122,
    categoryId: 3,
    title: 'Oatmeal Cookies',
    photo_url: 'https://www.texanerin.com/content/uploads/2019/06/nobake-chocolate-cookies-1-650x975.jpg',
    photosArray: [
      'https://www.texanerin.com/content/uploads/2019/06/nobake-chocolate-cookies-1-650x975.jpg',
      "https://www.kingarthurbaking.com/sites/default/files/styles/featured_image/public/2020-07/gluten-free-oatmeal-cookies.jpg?itok=_amqqRk1",
    ],
    time: '15',
    ingredients: [[0, '200ml'], [1, '5g'], [2, '300g']],
    description:
      '-- Start with cleaned and peeled russet potatoes that you have cut into 3/8-inch match sticks. Place in bowl of very cold water: keep rinsing and changing the water until the water is clear; drain thoroughly and dry with paper towels or a clean lint-free kitchen towel.\n\n -- Meanwhile, you preheat your hot oil to 350 degrees F. Place prepared taters in oil and cook about 5 minutes. They will have that blond-tone color to them. \n\n -- Note: Once you add cold potatoes to the hot oil, the temperature of your oil is going to drop - you want it to be somewhere between 330 - 325 degrees F. \n\n -- Remove from oil; drain and cool. Now - either refrigerate until ready to finish cooking, or cool completely and freeze up to 3 months. To freeze properly - place completely cooled fries in single layer on tray and place in freezer until frozen. Then bag them.\n\n -- To finish cooking - preheat your oil to 400* F. Add your cold fries (which will drop the oil temp - which is fine because you want it near the 375 degrees F. temp) and cook a few minutes until done. Lightly salt them and shake well so that the salt distributes well and they are not salty.'
  },
  {
    recipeId: 3,
    categoryId: 4,
    title: 'Triple Berry Smoothie',
    photo_url:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-how-to-make-a-smoothie-horizontal-1542310071.png?crop=0.803xw:0.923xh;0.116xw,0.00510xh&resize=768:*',
    photosArray: [
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-how-to-make-a-smoothie-horizontal-1542310071.png?crop=0.803xw:0.923xh;0.116xw,0.00510xh&resize=768:*',
      'https://www.vitamix.com/media/other/images/xVitamix-Triple-Berry-Smoothie-square-crop__1.jpg.pagespeed.ic.OgTC3ILD3R.jpg',
      'http://images.media-allrecipes.com/userphotos/960x960/3798204.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrzui8MM6W66I29VZwVvcjpGv99JW3O1owgupc3KwB65rhAyrZ'
    ],
    time: '10',
    ingredients: [
      [59, '1'],
      [60, '1/2 lbs'],
      [61, '1/2 liters'],
    ],
    description: 'In a blender, combine all ingredients and blend until smooth. Then divide between 2 cups and top with blackberries, if desired.'
  },
  {
    recipeId: 2,
    categoryId: 3,
    title: 'Vegan Cookies',
    photo_url: 'https://www.texanerin.com/content/uploads/2018/06/no-bake-lactation-cookies-1-650x975.jpg',
    photosArray: [
      'https://www.texanerin.com/content/uploads/2018/06/no-bake-lactation-cookies-1-650x975.jpg',
      'data:image/jpeg;base64,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',
    ],
    time: '30',
    ingredients: [
      [0, '2 quarts'],
      [16, '1'],
      [12, '1 cup'],
      [18, '1 cup'],
      [19, '1 teaspoon'],
      [1, '2 teaspoons'],
      [4, '1/4 teaspoons'],
      [7, '1/8 teaspoons'],
      [20, '1/2 teaspoons'],
      [21, '4']
    ],
    description:
      '-- Beat the egg and then combine it with water in a bowl. Stir. Combine the flour, salt, MSG, pepper, onion powder and garlic powder in a gallon size zip lock bag. Pound each of the breast filets until about 1/4-inch thick. Then cut into bite sized pieces. Coat each piece with the flour mixture by shaking in the zip lock bag. Remove and coat in the egg mixture. Then coat in the flour mixture again. Shake to coat. Deep fry at 375 degrees for 10-12 minutes, until browned and crispy.'
  },
  {
    recipeId: 3,
    categoryId: 3,
    title: 'Pumpkin Spice Cookies',
    photo_url:
      'https://www.texanerin.com/content/uploads/2018/11/pumpkin-spice-cookies-4-650x975.jpg',
    photosArray: [
      'https://www.texanerin.com/content/uploads/2018/11/pumpkin-spice-cookies-4-650x975.jpg',
    ],
    time: '45',
    ingredients: [
      [0, '2 tablespoons'],
      [22, '1/2'],
      [23, '2 tablespoons'],
      [7, '2 cloves'],
      [3, '1 teaspoon'],
      [24, '1 tablespoon'],
      [25, '1 lb'],
      [1, '2 teaspoons'],
      [4, '2 teaspoons'],
      [26, '15 oz'],
      [27, '8'],
      [28, '2'],
      [29, '1 cup']
    ],
    description:
      '-- In a medium pot over medium heat, heat 1 tablespoon oil. Add onion and cook until soft, 5 minutes. Add garlic and cook until fragrant, 1 minute more. Add tomato paste and stir to coat onion and garlic. Add ground beef and cook, breaking up meat with a wooden spoon, until no longer pink, 6 minutes. Drain fat.\n\n -- Return beef to pot and season with chili powder, paprika, salt, and pepper. Add tomato sauce and kidney beans. Bring to a boil, then reduce heat and let simmer 15 minutes. Add some chili to center of each tortilla, leaving room to fold in edges. Top with Fritos, then cheddar. Fold edges of tortillas toward the center, creating pleats. Invert Crunchwraps so pleats are on the bottom and stay together.\n\n -- In medium skillet over medium heat, heat remaining tablespoon oil. Add a Crunchwrap seam side down and cook until tortilla is golden, 3 to 5 minutes per side. Repeat with remaining Crunchwraps'
  },
  {
    recipeId: 1,
    categoryId: 3,
    title: 'Brownies',
    photo_url: 'https://www.texanerin.com/content/uploads/2018/01/coconut-flour-brownies-1-650x975.jpg',
    photosArray: [
      'https://www.texanerin.com/content/uploads/2018/01/coconut-flour-brownies-1-650x975.jpg',
      'https://i0.wp.com/smittenkitchen.com/wp-content/uploads//2012/08/my-favorite-brownies1.jpg?fit=1200%2C800&ssl=1',
    ],
    time: '30',
    ingredients: [
      [1, '2 tablespoons'],
      [3, '1 tablespoon'],
      [4, '1 teaspoon'],
      [5, '1/2 teaspoons'],
      [6, '1/2 teaspoons'],
      [7, '1/2 teaspoons'],
      [8, '1/2 teaspoons'],
      [9, '1/2 teaspoons'],
      [10, '1/2 teaspoons'],
      [11, '1/2 teaspoons'],
      [12, '1/2 cups'],
      [13, '1 tablespoon'],
      [14, '1 tablespoon'],
      [15, '2 breasts, 2 thighs, 2 drumsticks, 2 wings'],
      [16, '1'],
      [17, '2 quarts']
    ],
    description:
      '-- Preheat fryer to 350°F. Thoroughly mix together all spices. Combine spices with flour, brown sugar and salt. Dip chicken pieces in egg white to lightly coat them, then transfer to flour mixture. Turn a few times and make sure the flour mix is really stuck to the chicken.\n\n -- Repeat with all the chicken pieces. Let chicken pieces rest for 5 minutes so crust has a chance to dry a bit. Fry chicken in batches. Breasts and wings should take 12-14 minutes, and legs and thighs will need a few more minutes. Chicken pieces are done when a meat thermometer inserted into the thickest part reads 165°F. Let chicken drain on a few paper towels when it comes out of the fryer. Serve hot.'
  },
  {
    recipeId: 4,
    categoryId: 1,
    title: 'Perfect Fish Tacos',
    photo_url: 'https://hips.hearstapps.com/hmg-prod/images/190307-fish-tacos-112-1553283299.jpg',
    photosArray: [
      'http://d2814mmsvlryp1.cloudfront.net/wp-content/uploads/2014/04/WGC-Fish-Tacos-copy-2.jpg',
      'https://thecozyapron.com/wp-content/uploads/2018/03/baja-fish-tacos_thecozyapron_1.jpg',
      'https://www.simplyrecipes.com/wp-content/uploads/2017/06/2017-07-22-FishTacos-6.jpg'
    ],
    time: '35',
    ingredients: [
      [30, 'jucie of 1 '],
      [24, '2 teaspoons'],
      [0, '3 tablespoons'],
      [3, '1 teaspoon'],
      [31, '1/2 teaspoons'],
      [32, '1/2 teaspoons'],
      [4, '2 teaspoons'],
      [33, '1/2 lb'],
      [27, '8'],
      [14, '2 teasponns'],
      [34, '1']
    ],
    description:
      '-- In a medium shallow bowl, whisk together olive oil, lime juice, paprika, chili powder, cumin, and cayenne. Add cod, tossing until evenly coated. Let marinate 15 minutes. Meanwhile, make slaw: In a large bowl, whisk together mayonnaise, lime juice, cilantro, and honey. Stir in cabbage, corn, and jalapeño. Season with salt and pepper.\n\n -- In a large nonstick skillet over medium-high heat, heat vegetable oil. Remove cod from marinade and season both sides of each filet with salt and pepper. Add fish flesh side-down. Cook until opaque and cooked through, 3 to 5 minutes per side.\n\n -- Let rest 5 minutes before flaking with a fork. Assemble tacos: Serve fish over grilled tortillas with corn slaw and avocado. Squeeze lime juice on top and garnish with sour cream. '
  },
  {
    recipeId: 5,
    categoryId: 1,
    title: 'Chicken Fajitas',
    photo_url:
      'https://tmbidigitalassetsazure.blob.core.windows.net/secure/RMS/attachments/37/1200x1200/Flavorful-Chicken-Fajitas_EXPS_GHBZ18_12540_B08_15_8b.jpg',
    photosArray: [
      'https://dadwithapan.com/wp-content/uploads/2015/07/Spicy-Chicken-Fajitas-22-1200x480.jpg',
      'https://3.bp.blogspot.com/-X-dHj7ORF9Q/XH4ssgTuSZI/AAAAAAAAEig/E46HP9wCfdsvyJFcMTX30cw-ICep8lF9ACHMYCw/s1600/chicken-fajitas-mexican-food-id-149559-buzzerg.jpg',
      'https://cdn-image.foodandwine.com/sites/default/files/styles/medium_2x/public/201403-xl-chipotle-chicken-fajitas.jpg?itok=ghVcI5SQ'
    ],
    time: 35,
    ingredients: [
      [9, '1/2 teaspoons'],
      [0, '4 tablespoons'],
      [1, '1/2 teaspoons'],
      [30, '2 tablespoons'],
      [31, '1 teaspoon'],
      [7, '1 teaspoon'],
      [24, '1/2 teaspoons'],
      [3, '1/2 teaspoons'],
      [21, '1 pound'],
      [22, '1/2 cup'],
      [27, '6'],
      [36, '4'],
      [37, '1/2'],
      [38, '1/2']
    ],
    description:
      '-- In a large bowl, combine 2 tablespoons oil, lemon juice and seasonings; add the chicken. Turn to coat; cover. Refrigerate for 1-4 hours In a large skillet, saute peppers and onions in remaining oil until crisp-tender. Remove and keep warm. Drain chicken, discarding marinade. In the same skillet, cook chicken over medium-high heat for 5-6 minutes or until no longer pink.\n\n -- Return pepper mixture to pan; heat through. Spoon filling down the center of tortillas; fold in half. Serve with toppings as desired.'
  },
  {
    recipeId: 6,
    categoryId: 2,
    title: 'Buffalo Pizza',
    photo_url:
      'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
    photosArray: [
      'https://www.tablefortwoblog.com/wp-content/uploads/2019/01/buffalo-chicken-pizza-recipe-photos-tablefortwoblog-3-500x500.jpg',
      'http://pizzachoicema.com/wp-content/uploads/2018/08/Buffalo-Chicken-Pizza.jpg',
    ],
    time: 50,
    ingredients: [
      [39, '1 lb'],
      [40, '1 cup'],
      [41, '1/2 cup'],
      [42, '1/4 cup'],
      [43, '2 tablespoons'],
      [44, '1/2 cup'],
      [7, '1/4 teaspoons'],
      [5, '1/4 teaspoons'],
      [30, '1/4 teaspoons'],
      [45, '2 oz'],
      [12, 'for dusting'],
      [4, '1/2 teaspoons'],
      [47, '2'],
      [46, '9 oz']
    ],
    description:
      '-- Place a rack in upper third of oven. Place a large cast-iron skillet on rack and preheat oven to 500° (or as high as your oven will go). Place pizza dough in a large bowl, pour a little oil over, and turn to coat. Cover bowl with plastic and let dough proof at room temperature while pan and oven heat up.\n\n -- Meanwhile, cook hot sauce, marinara sauce, and butter in a medium saucepan over medium heat, stirring occasionally, until butter is melted. Stir in cream, reduce heat to low, and simmer, stirring occasionally, until slightly thickened and warmed through, about 10 minutes. Heat 1 Tbsp. oil in a large skillet over medium-high. Add chicken, toss to coat, then add ¼ cup Buffalo sauce.\n\n -- Cook chicken, tossing occasionally, until heated through, about 2 minutes. Reduce heat and simmer, stirring often, until chicken is well coated and sauce is slightly thickened, about 5 minutes. Meanwhile, whisk yogurt, lemon juice, celery salt, garlic powder, ¼ cup blue cheese, ½ tsp. pepper, and 2 Tbsp. water in a small bowl, adding more water if sauce seems too thick (it should be pourable); set aside.\n\n -- Turn out dough onto a lightly floured work surface. Shape with your hands into a round that’s slightly larger than the cast-iron skillet you’re using. Take hot skillet out of oven (watch that handle!) and place on a heatproof surface. Add a little flour to pan. Lay dough in skillet, then work edges of dough up sides of skillet with your fingertips (use a rubber spatula or wooden spoon if you’re nervous about touching the hot pan). Drizzle a little oil around inside edge of pan so that it trickles behind and underneath dough, which will encourage browning and help it release.\n\n -- Spread about ⅓ cup Buffalo sauce over dough. Arrange mozzarella over, then top with remaining ¼ cup blue cheese. Arrange chicken mixture on top. Bake pizza on top rack until crust and cheese are nicely browned, 15–20 minutes. Transfer skillet to stovetop (again, watch that handle!) and let pizza rest a few minutes. Using a spatula, slide pizza onto a cutting board or platter. Arrange celery over, then top with reserved blue cheese dressing. Season with pepper, then drizzle with oil.'
  },
  {
    recipeId: 0,
    categoryId: 0,
    title: 'Pizza',
    photo_url: 'https://pizzabrothers.sk/wp-content/uploads/2019/10/8-bacovska-pizza-brothers.jpg',
    photosArray: [
      "https://pizzabrothers.sk/wp-content/uploads/2019/10/8-bacovska-pizza-brothers.jpg",
    ],
    time: '15',
    ingredients: [[0, '200ml'], [1, '5g'], [2, '300g']],
    description:
      '-- Start with cleaned and peeled russet potatoes that you have cut into 3/8-inch match sticks. Place in bowl of very cold water: keep rinsing and changing the water until the water is clear; drain thoroughly and dry with paper towels or a clean lint-free kitchen towel.\n\n -- Meanwhile, you preheat your hot oil to 350 degrees F. Place prepared taters in oil and cook about 5 minutes. They will have that blond-tone color to them. \n\n -- Note: Once you add cold potatoes to the hot oil, the temperature of your oil is going to drop - you want it to be somewhere between 330 - 325 degrees F. \n\n -- Remove from oil; drain and cool. Now - either refrigerate until ready to finish cooking, or cool completely and freeze up to 3 months. To freeze properly - place completely cooled fries in single layer on tray and place in freezer until frozen. Then bag them.\n\n -- To finish cooking - preheat your oil to 400* F. Add your cold fries (which will drop the oil temp - which is fine because you want it near the 375 degrees F. temp) and cook a few minutes until done. Lightly salt them and shake well so that the salt distributes well and they are not salty.'
  },
  {
    recipeId: 7,
    categoryId: 2,
    title: 'Spaghetti Carbonara',
    photo_url: 'https://truffle-assets.imgix.net/655ce202-862-butternutsquashcarbonara-land.jpg',
    photosArray: [
      'https://ak3.picdn.net/shutterstock/videos/10431533/thumb/10.jpg',
      'https://www.kcet.org/sites/kl/files/styles/kl_image_large/public/thumbnails/image/square_hero_desktop_2x_sfs_spaghetti_carbonara_clr-3.jpg?itok=T-rsBDIZ',
      'https://cdn-image.foodandwine.com/sites/default/files/HD-201104-r-spaghetti-with-anchovy.jpg'
    ],
    time: 15,
    ingredients: [
      [48, '50g'],
      [49, '100g'],
      [50, '350g'],
      [51, '2 plump'],
      [42, '50g'],
      [16, '3'],
      [1, '2 teaspoons'],
      [4, '2 teaspoons']
    ],
    description:
      '-- Put the egg yolks into a bowl, finely grate in the Parmesan, season with pepper, then mix well with a fork and put to one side. Cut any hard skin off the pancetta and set aside, then chop the meat. Cook the spaghetti in a large pan of boiling salted water until al dente.\n\n -- Meanwhile, rub the pancetta skin, if you have any, all over the base of a medium frying pan (this will add fantastic flavour, or use 1 tablespoon of oil instead), then place over a medium-high heat. Peel the garlic, then crush with the palm of your hand, add it to the pan and leave it to flavour the fat for 1 minute. Stir in the pancetta, then cook for 4 minutes, or until it starts to crisp up. Pick out and discard the garlic from the pan, then, reserving some of the cooking water, drain and add the spaghetti.\n\n -- Toss well over the heat so it really soaks up all that lovely flavour, then remove the pan from the heat. Add a splash of the cooking water and toss well, season with pepper, then pour in the egg mixture – the pan will help to cook the egg gently, rather than scrambling it. Toss well, adding more cooking water until it’s lovely and glossy. Serve with a grating of Parmesan and an extra twist of pepper.'
  },
  {
    recipeId: 8,
    categoryId: 2,
    title: 'Lazania',
    photo_url: 'https://images8.alphacoders.com/817/817353.jpg',
    photosArray: [
      'https://previews.123rf.com/images/somegirl/somegirl1509/somegirl150900048/46103208-top-view-of-a-delicious-traditional-italian-lasagna-made-with-minced-beef-bolognese-sauce-topped-wit.jpg',
      'https://truffle-assets.imgix.net/87f324e4-YOUTUBE-NO-TXT.00_03_19_14.Imagen_fija001.jpg',
      'https://images4.alphacoders.com/817/817350.jpg'
    ],
    time: 60,
    ingredients: [
      [36, '1 large'],
      [25, '1 pound'],
      [51, '5 cloves'],
      [52, '1 pound'],
      [53, '1 pound'],
      [54, '1 28 ounce can'],
      [23, '2 6 ounce can'],
      [55, '2 tablespoons'],
      [56, '1/4 cup'],
      [10, '1/2 cup'],
      [1, '1/2 teaspoons'],
      [58, '1 teaspoon'],
      [4, '1/4 teaspoons'],
      [16, '1 large'],
      [46, '1 pound'],
      [48, '1 cup'],
      [57, '30 ounces']
    ],
    description:
      '-- Cook noodles according to package directions; drain. Meanwhile, in a Dutch oven, cook sausage, beef and onion over medium heat 8-10 minutes or until meat is no longer pink, breaking up meat into crumbles. Add garlic; cook 1 minute. Drain. Stir in tomatoes, tomato paste, water, sugar, 3 tablespoons parsley, basil, fennel, 1/2 teaspoon salt and pepper; bring to a boil. Reduce heat; simmer, uncovered, 30 minutes, stirring occasionally. In a small bowl, mix egg, ricotta cheese, and remaining parsley and salt. Preheat oven to 375°. Spread 2 cups meat sauce into an ungreased 13x9-in. baking dish. Layer with 3 noodles and a third of the ricotta mixture. Sprinkle with 1 cup mozzarella cheese and 2 tablespoons Parmesan cheese.\n\n -- Repeat layers twice. Top with remaining meat sauce and cheeses (dish will be full). Bake, covered, 25 minutes. Bake, uncovered, 25 minutes longer or until bubbly. Let stand 15 minutes before serving.'
  }
];

export const ingredients = [
  {
    ingredientId: 0,
    name: 'Oil',
    photo_url: 'https://ak7.picdn.net/shutterstock/videos/27252067/thumb/11.jpg'
  },
  {
    ingredientId: 1,
    name: 'Salt',
    photo_url:
      'https://image.freepik.com/free-photo/sea-salt-wooden-bowl-isolated-white-background_29402-416.jpg'
  },
  {
    ingredientId: 2,
    name: 'Russet potatoes',
    photo_url: 'http://www.valleyspuds.com/wp-content/uploads/Russet-Potatoes-cut.jpg'
  },
  {
    ingredientId: 3,
    name: 'Paprika',
    photo_url:
      'https://image.freepik.com/free-photo/red-chilli-pepper-powder-isolated-white-background_55610-28.jpg'
  },
  {
    ingredientId: 4,
    name: 'Black Pepper',
    photo_url: 'https://ak0.picdn.net/shutterstock/videos/26741680/thumb/1.jpg'
  },
  {
    ingredientId: 5,
    name: 'Celery salt',
    photo_url: 'https://www.hasiroglugurme.com/images/urunler/Koftelik-Esmer-Bulgur-resim-297.jpg'
  },
  {
    ingredientId: 6,
    name: 'Dried sage',
    photo_url:
      'https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/Esxjvv7/super-slow-motion-dried-sage-falling-on-white-background_n1xg2gxzg__F0000.png'
  },
  {
    ingredientId: 7,
    name: 'Garlic powder',
    photo_url:
      'https://us.123rf.com/450wm/belchonock/belchonock1808/belchonock180818180/106007144-bowl-of-dry-garlic-powder-on-white-background.jpg?ver=6'
  },
  {
    ingredientId: 8,
    name: 'Ground allspice',
    photo_url:
      'https://www.savoryspiceshop.com/content/mercury_modules/cart/items/2/6/9/2695/allspice-berries-jamaican-ground-1.jpg'
  },
  {
    ingredientId: 9,
    name: 'Dried oregano',
    photo_url: 'https://frutascharito.es/886-large_default/oregano.jpg'
  },
  {
    ingredientId: 10,
    name: 'Dried basil',
    photo_url: 'https://www.honeychop.com/wp-content/uploads/2015/09/Dried-Mint.png'
  },
  {
    ingredientId: 11,
    name: 'Dried marjoram',
    photo_url: 'https://images-na.ssl-images-amazon.com/images/I/71YATIBqBYL._SX355_.jpg'
  },
  {
    ingredientId: 12,
    name: 'All-purpose flour',
    photo_url:
      'https://images.assetsdelivery.com/compings_v2/seregam/seregam1309/seregam130900036.jpg'
  },
  {
    ingredientId: 13,
    name: 'Brown sugar',
    photo_url:
      'https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/BALQTtekliuc6iu4u/rotating-brown-sugar-in-a-white-container-on-white-background_sis0xtbyl_thumbnail-full01.png'
  },
  {
    ingredientId: 14,
    name: 'Kosher salt',
    photo_url:
      'https://d1yn1kh78jj1rr.cloudfront.net/image/preview/r64-6MxPQjlatyfjp/storyblocks-top-view-of-ceramic-salt-cellar-with-coarse-grained-sea-salt-isolated-on-white-background_SPzKionPuV_SB_PM.jpg'
  },
  {
    ingredientId: 15,
    name: 'Whole chicken',
    photo_url:
      'https://image.shutterstock.com/image-photo/two-raw-chicken-drumsticks-isolated-260nw-632125991.jpg'
  },
  {
    ingredientId: 16,
    name: 'Eggs',
    photo_url:
      'https://image.shutterstock.com/image-photo/egg-whites-yolk-cup-isolated-260nw-1072453787.jpg'
  },
  {
    ingredientId: 17,
    name: 'Quarts neutral oil',
    photo_url:
      'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimg1.cookinglight.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F4_3_horizontal_-_1200x900%2Fpublic%2Fgettyimages-464433694_0.jpg%3Fitok%3DK42YR2GV&w=400&c=sc&poi=face&q=85'
  },
  {
    ingredientId: 18,
    name: 'Water',
    photo_url: 'https://ak1.picdn.net/shutterstock/videos/829561/thumb/11.jpg'
  },
  {
    ingredientId: 19,
    name: 'Onion Powder',
    photo_url:
      'https://image.shutterstock.com/image-photo/mixed-spices-isolated-on-white-260nw-662383828.jpg'
  },
  {
    ingredientId: 20,
    name: 'MSG',
    photo_url:
      'https://img.freepik.com/free-photo/monosodium-glutamate-wood-spoon-white-background_55883-399.jpg?size=626&ext=jpg'
  },
  {
    ingredientId: 21,
    name: 'Chicken Breast',
    photo_url:
      'https://us.123rf.com/450wm/utima/utima1602/utima160200063/53405187-raw-chicken-breast-fillets.jpg?ver=6'
  },
  {
    ingredientId: 22,
    name: 'Onion chopped',
    photo_url: 'https://s3.envato.com/files/246703499/IMG_1752_5.jpg'
  },
  {
    ingredientId: 23,
    name: 'Tomato paste',
    photo_url:
      'http://d3e1m60ptf1oym.cloudfront.net/45bab59a-363c-11e1-ab4e-bf4c2e0bb026/PANELA_xgaplus.jpg'
  },
  {
    ingredientId: 24,
    name: 'Chilli Powder',
    photo_url:
      'https://us.123rf.com/450wm/nuttapong/nuttapong1505/nuttapong150500009/40458002-paprika-powder-isolated-on-white-background.jpg?ver=6'
  },
  {
    ingredientId: 25,
    name: 'Ground Beef',
    photo_url:
      'https://images.radio.com/kmoxam/s3fs-public/styles/nts_image_cover_tall_775x425/public/dreamstime_s_39607998.jpg?XCM.w1UGOp9sVKkWGQZe7_JIsRddxoIK&itok=3M6KcFLH&c=73fb6497175b4c1a5c79e3ede816656a'
  },
  {
    ingredientId: 26,
    name: 'Can kidney beans, rinsed and drained ',
    photo_url:
      'https://www.seriouseats.com/images/2014/04/20140414-pile-of-beans-primary-1500x1125.jpg'
  },
  {
    ingredientId: 27,
    name: 'Large Tortillas',
    photo_url: 'https://upload.wikimedia.org/wikipedia/commons/5/56/NCI_flour_tortillas.jpg'
  },
  {
    ingredientId: 28,
    name: 'Firtos',
    photo_url:
      'https://previews.123rf.com/images/ksena32/ksena321510/ksena32151000090/45863494-fried-fish-on-a-white-background.jpg'
  },
  {
    ingredientId: 29,
    name: 'Shredded cheddar',
    photo_url:
      'https://image.shutterstock.com/image-photo/top-view-small-bowl-filled-260nw-284460308.jpg'
  },
  {
    ingredientId: 30,
    name: 'Lime',
    photo_url: 'https://ak8.picdn.net/shutterstock/videos/23271748/thumb/1.jpg'
  },

  {
    ingredientId: 31,
    name: 'Ground cumin',
    photo_url:
      'https://image.shutterstock.com/image-photo/pile-cumin-powder-isolated-on-260nw-1193262853.jpg'
  },
  {
    ingredientId: 32,
    name: 'Cayenne pepper',
    photo_url: 'https://ak7.picdn.net/shutterstock/videos/11461337/thumb/1.jpg'
  },
  {
    ingredientId: 33,
    name: 'Flaky white fish',
    photo_url:
      'https://image.shutterstock.com/image-photo/roach-river-fish-isolated-on-260nw-277764143.jpg'
  },
  {
    ingredientId: 34,
    name: 'Avocado',
    photo_url:
      'https://www.redwallpapers.com/public/redwallpapers-large-thumb/avocado-cut-stone-leaves-white-background-free-stock-photos-images-hd-wallpaper.jpg'
  },
  {
    ingredientId: 35,
    name: 'Red Pepper Flakes',
    photo_url:
      'https://as1.ftcdn.net/jpg/02/06/55/10/500_F_206551074_mVczUrAWOSMaw8kR48FQDQBqDw47jCtL.jpg'
  },
  {
    ingredientId: 36,
    name: 'Onions',
    photo_url: 'http://www.allwhitebackground.com/images/2/2650.jpg'
  },
  {
    ingredientId: 37,
    name: 'Green Pepper',
    photo_url: 'https://ak9.picdn.net/shutterstock/videos/4055509/thumb/1.jpg'
  },
  {
    ingredientId: 38,
    name: 'Red Pepper',
    photo_url: 'https://ak9.picdn.net/shutterstock/videos/10314179/thumb/1.jpg'
  },
  {
    ingredientId: 39,
    name: 'Pizza dough',
    photo_url:
      'https://image.shutterstock.com/image-photo/fresh-raw-dough-pizza-bread-260nw-518950903.jpg'
  },
  {
    ingredientId: 40,
    name: 'Ketchup sauce',
    photo_url:
      'https://st2.depositphotos.com/5262887/11050/i/950/depositphotos_110501208-stock-photo-ketchup-bowl-isolated-on-white.jpg'
  },
  {
    ingredientId: 41,
    name: 'Hot Sauce',
    photo_url:
      'https://media.istockphoto.com/photos/opened-can-of-spaghetti-sauce-on-a-white-background-picture-id497704752?k=6&m=497704752&s=612x612&w=0&h=JnL54buYu1Z3fGtd8uNdjFxiAKwlxoDluD6jbIfSaZI='
  },
  {
    ingredientId: 42,
    name: 'Butter',
    photo_url: 'https://redrockstoffee.com/media/2016/11/AdobeStock_76417550.jpeg'
  },
  {
    ingredientId: 43,
    name: 'Heavy Cream',
    photo_url:
      'https://media.istockphoto.com/photos/mayonnaise-in-bowl-isolated-on-white-background-picture-id614981116?k=6&m=614981116&s=612x612&w=0&h=LtbsI2HQXOTERYuP9YJ2PJfRF3W6DcyZ798fxMcQWC0='
  },
  {
    ingredientId: 44,
    name: 'whole-milk plain yogurt',
    photo_url:
      'https://st.depositphotos.com/2757384/3317/i/950/depositphotos_33170129-stock-photo-pouring-a-glass-of-milk.jpg'
  },
  {
    ingredientId: 45,
    name: 'Chesse',
    photo_url: 'https://ak7.picdn.net/shutterstock/videos/3619997/thumb/1.jpg'
  },
  {
    ingredientId: 46,
    name: 'Mozzarella',
    photo_url:
      'https://t3.ftcdn.net/jpg/02/06/73/98/500_F_206739841_suPu6qDPHlowFqx9qo8fLqV8sNevL2g3.jpg'
  },
  {
    ingredientId: 47,
    name: 'celery stalks',
    photo_url:
      'https://cdn4.eyeem.com/thumb/6d1b3957c7caa9b73c3e0f820ef854b931808139-1538043742765/w/750'
  },
  {
    ingredientId: 48,
    name: 'Parmesan Chesse',
    photo_url: 'https://ak7.picdn.net/shutterstock/videos/3721877/thumb/1.jpg'
  },
  {
    ingredientId: 49,
    name: 'pancetta',
    photo_url:
      'https://previews.123rf.com/images/onlyfabrizio/onlyfabrizio1606/onlyfabrizio160600002/60198502-raw-stripes-of-pancetta-stesa-on-a-white-background.jpg'
  },
  {
    ingredientId: 50,
    name: 'Spaghetti',
    photo_url:
      'https://previews.123rf.com/images/mfron/mfron1204/mfron120400098/13306773-bunch-of-spaghetti-nudeln-isoliert-auf-wei%C3%9Fem-hintergrund.jpg'
  },
  {
    ingredientId: 51,
    name: 'Garlic',
    photo_url: 'https://image.freepik.com/free-photo/fresh-garlic-white-background_1339-17012.jpg'
  },
  {
    ingredientId: 52,
    name: 'Lasagna noodles',
    photo_url:
      'https://previews.123rf.com/images/velkol/velkol1110/velkol111000004/11083085-an-image-of-raw-lasagna-on-white-background.jpg'
  },
  {
    ingredientId: 53,
    name: 'Italian sauce',
    photo_url:
      'https://previews.123rf.com/images/arinahabich/arinahabich1504/arinahabich150400858/38827029-raw-italian-sausage-on-a-white-background-.jpg'
  },
  {
    ingredientId: 54,
    name: 'Crushed Tomatoes',
    photo_url:
      'https://previews.123rf.com/images/merkulovnik/merkulovnik1406/merkulovnik140600100/28751626-crushed-tomato-isolated-on-white-background.jpg'
  },
  {
    ingredientId: 55,
    name: 'Sugar',
    photo_url:
      'https://previews.123rf.com/images/sommai/sommai1411/sommai141100034/33199985-sugar-cubes-in-a-bowl-isolated-on-white-background.jpg'
  },
  {
    ingredientId: 56,
    name: 'minced fresh parsley',
    photo_url:
      'https://t4.ftcdn.net/jpg/02/15/78/05/240_F_215780551_Eid0xpP1M2fokvuEcvJj8uqhROLJkb3p.jpg'
  },
  {
    ingredientId: 57,
    name: 'ricotta cheese',
    photo_url:
      'https://previews.123rf.com/images/barkstudio/barkstudio1608/barkstudio160800351/61418602-ricotta-cheese-into-a-bowl-in-white-background.jpg'
  },
  {
    ingredientId: 58,
    name: ' fennel seed',
    photo_url:
      'https://previews.123rf.com/images/pinkomelet/pinkomelet1710/pinkomelet171000227/88851299-close-up-the-fennel-seed-on-white-background.jpg'
  },
  {
    ingredientId: 59,
    name: 'Banana',
    photo_url:
      'https://www.conservationmagazine.org/wp-content/uploads/2013/04/sterile-banana.jpg'
  },
  {
    ingredientId: 60,
    name: 'Frozen Straberries',
    photo_url:
      'https://www.cascadianfarm.com/wp-content/uploads/2018/12/Strawberries_Main_0218.png'
  },
  {
    ingredientId: 61,
    name: 'Greek Yogurt',
    photo_url:
      'http://images.media-allrecipes.com/userphotos/960x960/3758635.jpg'
  },
];
