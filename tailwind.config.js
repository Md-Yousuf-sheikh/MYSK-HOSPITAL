module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            backgroundImg: {
                'banner-img': "url('https://i.ibb.co/nrgQCVf/home-2-slider3.jpg')"
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}