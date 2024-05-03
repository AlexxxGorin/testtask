import { createApp } from 'vue';
import App from '@/views/layouts/app';

// Import BalmUI scripts
import BalmUI from 'balm-ui'; // Official Google Material Components
import BalmUIPlus from 'balm-ui-plus'; // BalmJS Team Material Components

// Import BalmUI styles (Not recommend usage, and see above "SASS/CSS Management" for recommended usage)
import 'balm-ui-css';

const app = createApp(App);

app.use(BalmUI, {
  $theme: {
    primary: '#FF6600', // Use your custom primary color
  },
});
app.mount('#app');