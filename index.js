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
    props: ['columnSize', 'selection', 'elementId', 'inputName', 'name'],
    data: function(){
        return {
            optionSelected: this.selection[0],
        }
    },
    methods: {
        sendOption: function(){
            this.$emit('send-option', {name: this.name, data: this.optionSelected});
        }
    },
    template: `
        <div class="form-group col-md-4">
            <label v-bind:for="elementId">{{inputName}}</label>
            <select v-bind:id="elementId" class="form-control" v-model="optionSelected" v-on:input="sendOption">
                <option v-for="item in selection">{{item}}</option>
            </select>
        </div>  
    `
});

Vue.component('check-box', {
    props: ['elementId', 'inputName', 'name'],
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
    `, 
    watch: {
        checked: function(newValue, oldValue){
            this.$emit('check-box-change', {name: this.name, data: newValue});
        }
    }
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
    methods: {
        displayInfo: function(val){
            this[val['name']] = val['data'];
        }
    },
    template: `
        <form>
        <div class="form-row">
            <form-input name="email" label-text='Email' form-type="email" column-size="col-md-6" element-id="inputEmail14" placeholder-text="Email" v-on:send-form-input="displayInfo"></form-input>
            <form-input name="password" label-text='Password' form-type="password" column-size="col-md-6" element-id="inputPassword4" placeholder-text="Password" v-on:send-form-input="displayInfo"></form-input>
        </div>
        <div class="form-group">
            <form-input name="address" label-text='Address' form-type="text" element-id="inputAddress" placeholder-text="1234 Main St" v-on:send-form-input="displayInfo"></form-input>
        </div>
        <div class="form-group">
            <form-input name="address2" label-text='Address 2' form-type="text" element-id="inputAddress2" placeholder-text="Apartment, studio, or floor"v-on:send-form-input="displayInfo"></form-input>
        </div>
        <div class="form-row">
            <form-input name="city" label-text='City' form-type="text" column-size="col-md-6" element-id="inputCity" v-on:send-form-input="displayInfo"></form-input>
            <selection-box name="region" input-name="Region" column-size="col-md-4" v-bind:selection="['West Midlands', 'East Midlands']" element-id="inputState" v-on:send-option="displayInfo"></selection-box>
            <form-input name="postcode" label-text='Postcode' form-type="text" column-size="col-md-2" element-id="inputZip" v-on:send-form-input="displayInfo"></form-input>
        </div>
        <div class="form-group">
            <check-box name="checked" elementId="gridCheck" inputName="Check me out" v-on:check-box-change="displayInfo"></check-box>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    `
  })
  

new Vue({
    el: '#app'
})