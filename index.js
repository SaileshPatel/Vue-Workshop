Vue.component('form-input', {
    props: ['formType', 'columnSize', 'elementId', 'placeholderText', 'labelText', 'name'],
    data: function(){
        return {
            input: '',
        }
    }, 
    template: `
    <div class="form-group" v-bind:class="columnSize">
        <label v-bind:for="elementId">{{labelText}}</label>
        <input v-model="input" v-bind:type="formType" class="form-control" v-bind:id="elementId" v-bind:placeholder="placeholderText" v-on:input="sendInformation();">
    </div>
    `,
    methods: {
        sendInformation: function(){
            this.$emit('send-form-input', {name: this.name, data: this.input});
        }
    }
});

Vue.component('selection-box', {
    props: ['columnSize', 'selection', 'elementId', 'inputName'],
    data: function(){
        return {
            optionSelected: this.selection[0],
        }
    },
    template: `
        <div class="form-group col-md-4">
            <label v-bind:for="elementId">{{inputName}}</label>
            <select v-bind:id="elementId" class="form-control" v-model="optionSelected">
                <option v-for="item in selection">{{item}}</option>
            </select>
        </div>  
    `
});

Vue.component('check-box', {
    props: ['elementId', 'inputName'],
    data: function(){
        return {
            checked: false,
        }
    },
    template: `
        <div class="form-check">
            <input class="form-check-input" type="checkbox" v-bind:id="elementId" v-model="checked">
            <label class="form-check-label" v-bind:for="elementId">
                {{inputName}}
            </label>
        </div>
    `
})

Vue.component('form-component', {
    data: function () {
      return {
          email: '',
          password: '',
          address: '',
          address2: '',
          city: '',
          region: '',
          postcode: '',
          checked: '',
          submitted: false
      }
    },
    template: `
        <form>
        <div class="form-row">
            <form-input name="email" label-text='Email' form-type="email" column-size="col-md-6" element-id="inputEmail14" placeholder-text="Email"></form-input>
            <form-input name="password" label-text='Password' form-type="password" column-size="col-md-6" element-id="inputPassword4" placeholder-text="Password"></form-input>
        </div>
        <div class="form-group">
            <form-input name="address" label-text='Address' form-type="text" element-id="inputAddress" placeholder-text="1234 Main St"></form-input>
        </div>
        <div class="form-group">
            <form-input name="address2" label-text='Address 2' form-type="text" element-id="inputAddress2" placeholder-text="Apartment, studio, or floor"></form-input>
        </div>
        <div class="form-row">
            <form-input name="city" label-text='City' form-type="text" column-size="col-md-6" element-id="inputCity"></form-input>
            <selection-box input-name="Region" column-size="col-md-4" v-bind:selection="['West Midlands', 'East Midlands']" element-id="inputState"></selection-box>
            <form-input name="postcode" label-text='Postcode' form-type="text" column-size="col-md-2" element-id="inputZip"></form-input>
        </div>
        <div class="form-group">
            <check-box elementId="gridCheck" inputName="Check me out"></check-box>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    `
  })
  

new Vue({
    el: '#app'
})