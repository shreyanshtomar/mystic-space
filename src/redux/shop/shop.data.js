const SHOP_DATA = {
    hats: {
        id: 1,
        title: 'Hats',
        routeName: 'hats',
        items: [
            {
                id: 1,
                name: 'Brown Brim',
                imageUrl: 'https://i.ibb.co/ZYW3VTp/brown-brim.png',
                price: 25
            },
            {
                id: 2,
                name: 'Blue Beanie',
                imageUrl: 'https://i.ibb.co/ypkgK0X/blue-beanie.png',
                price: 18
            },
            {
                id: 3,
                name: 'Brown Cowboy',
                imageUrl: 'https://i.ibb.co/QdJwgmp/brown-cowboy.png',
                price: 35
            },
            {
                id: 4,
                name: 'Grey Brim',
                imageUrl: 'https://i.ibb.co/RjBLWxB/grey-brim.png',
                price: 25
            },
            {
                id: 5,
                name: 'Green Beanie',
                imageUrl: 'https://i.ibb.co/YTjW3vF/green-beanie.png',
                price: 18
            },
            {
                id: 6,
                name: 'Palm Tree Cap',
                imageUrl: 'https://i.ibb.co/rKBDvJX/palm-tree-cap.png',
                price: 14
            },
            {
                id: 7,
                name: 'Red Beanie',
                imageUrl: 'https://i.ibb.co/bLB646Z/red-beanie.png',
                price: 18
            },
            {
                id: 8,
                name: 'Wolf Cap',
                imageUrl: 'https://i.ibb.co/1f2nWMM/wolf-cap.png',
                price: 14
            },
            {
                id: 9,
                name: 'Blue Snapback',
                imageUrl: 'https://i.ibb.co/X2VJP2W/blue-snapback.png',
                price: 16
            }
        ]
    },
    sneakers: {
        id: 2,
        title: 'Sneakers',
        routeName: 'sneakers',
        items: [
            {
                id: 10,
                name: 'Adidas NMD',
                imageUrl: 'https://i.ibb.co/0s3pdnc/adidas-nmd.png',
                price: 220
            },
            {
                id: 11,
                name: 'Adidas Yeezy',
                imageUrl: 'https://i.ibb.co/dJbG1cT/yeezy.png',
                price: 280
            },
            {
                id: 12,
                name: 'Black Converse',
                imageUrl: 'https://i.ibb.co/bPmVXyP/black-converse.png',
                price: 110
            },
            {
                id: 13,
                name: 'Nike White AirForce',
                imageUrl: 'https://i.ibb.co/1RcFPk0/white-nike-high-tops.png',
                price: 160
            },
            {
                id: 14,
                name: 'Nike Red High Tops',
                imageUrl: 'https://i.ibb.co/QcvzydB/nikes-red.png',
                price: 160
            },
            {
                id: 15,
                name: 'Nike Brown High Tops',
                imageUrl: 'https://i.ibb.co/fMTV342/nike-brown.png',
                price: 160
            },
            {
                id: 16,
                name: 'Air Jordan Limited',
                imageUrl: 'https://i.ibb.co/w4k6Ws9/nike-funky.png',
                price: 190
            },
            {
                id: 17,
                name: 'Timberlands',
                imageUrl: 'https://i.ibb.co/Mhh6wBg/timberlands.png',
                price: 200
            }
        ]
    },
    jackets: {
        id: 3,
        title: 'Jackets',
        routeName: 'jackets',
        items: [
            {
                id: 18,
                name: 'Black Jean Shearling',
                imageUrl: 'https://i.ibb.co/XzcwL5s/black-shearling.png',
                price: 125
            },
            {
                id: 19,
                name: 'Blue Jean Jacket',
                imageUrl: 'https://i.ibb.co/mJS6vz0/blue-jean-jacket.png',
                price: 90
            },
            {
                id: 20,
                name: 'Grey Jean Jacket',
                imageUrl: 'https://i.ibb.co/N71k1ML/grey-jean-jacket.png',
                price: 90
            },
            {
                id: 21,
                name: 'Brown Shearling',
                imageUrl: 'https://i.ibb.co/s96FpdP/brown-shearling.png',
                price: 165
            },
            {
                id: 22,
                name: 'Tan Trench',
                imageUrl: 'https://i.ibb.co/M6hHc3F/brown-trench.png',
                price: 185
            }
        ]
    },
    women: {
        id: 4,
        title: 'Women',
        routeName: 'women',
        items: [
            {
                id: 23,
                name: 'Black Suit',
                imageUrl: 'https://images.unsplash.com/photo-1614786269829-d24616faf56d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8d29tZW4lMjBjbG90aGluZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                price: 25
            },
            {
                id: 24,
                name: 'Black Jacket',
                imageUrl: 'https://images.unsplash.com/photo-1543693087-639a38025487?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTh8fHdvbWVuJTIwY2xvdGhpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                price: 20
            },
            {
                id: 25,
                name: 'Pink Dress',
                imageUrl: 'https://images.unsplash.com/photo-1481214110143-ed630356e1bb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8d29tZW58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                price: 80
            },
            {
                id: 26,
                name: 'Red Dots Dress',
                imageUrl: 'https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png',
                price: 80
            },
            {
                id: 27,
                name: 'Striped Sweater',
                imageUrl: 'https://i.ibb.co/KmSkMbH/striped-sweater.png',
                price: 45
            },
            {
                id: 28,
                name: 'Black Track Suit',
                imageUrl: 'https://images.pexels.com/photos/4049672/pexels-photo-4049672.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                price: 135
            },
            {
                id: 29,
                name: 'White Blouse',
                imageUrl: 'https://i.ibb.co/qBcrsJg/white-vest.png',
                price: 20
            }
        ]
    },
    men: {
        id: 5,
        title: 'Men',
        routeName: 'men',
        items: [
            {
                id: 30,
                name: 'Red Sweat Shirt',
                imageUrl: 'https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                price: 325
            },
            {
                id: 31,
                name: 'Black High Neck',
                imageUrl: 'https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                price: 20
            },
            {
                id: 32,
                name: 'Black & White Longsleeve',
                imageUrl: 'https://i.ibb.co/55z32tw/long-sleeve.png',
                price: 25
            },
            {
                id: 33,
                name: 'White Hoodie',
                imageUrl: 'https://images.pexels.com/photos/93827/pexels-photo-93827.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                price: 25
            },
            {
                id: 34,
                name: 'Grey & Black Shirt',
                imageUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWVufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                price: 40
            },
            {
                id: 35,
                name: 'Black Suit',
                imageUrl: 'https://images.unsplash.com/photo-1521341057461-6eb5f40b07ab?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzR8fG1lbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                price: 25
            }
        ]
    }
};

export default SHOP_DATA;
