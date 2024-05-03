<template>

  
      
      <ui-form v-on:submit.prevent="register" item-margin-bottom="16" >
        
        
        <template #default="{  actionClass }">
          <div style="background-color: rgb(221, 221, 221); padding: 10px; border-radius: 4px; width: 250px; display: flex; flex-direction: column; align-items: flex-start;">


          <ui-icon style="opacity: .5; align-self: flex-end;">clear</ui-icon>
          <h3 style="align-self: center;">Бронирование</h3>
          Фамилия

          <ui-form-field >
            
            <ui-textfield style="height: 36px;" v-model="email">
              
            </ui-textfield>
          </ui-form-field>
          <ui-form-field :class="actionClass">
            <ui-button color="info" raised>Забронировать</ui-button>

          </ui-form-field>

        </div>
        </template>
      
      </ui-form>
  </template>
  
  
  
  
  <script>
  
  export default {
    data() {
      return {
        email: '',
        password: ''
      };
    },
    methods: {
      register() {
        // Handle form submission
      }
    }
  };
  </script>
  
  
  <style >
    .mdc-button__label {
      color: #ffffff; /* Change to your desired text color */
    }

    .mdc-form__item {
      width: 100%;
    }

    .mdc-text-field--filled {
      height: 24px;
    }

    .mdc-text-field{
      width: 100%;

    }

    .mdc-button {
      width: 100%;
    }
  
  </style>