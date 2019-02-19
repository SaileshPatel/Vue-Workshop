Vue.component('form-input', {
    props: ['formType', 'columnSize', 'elementId', 'placeholderText', 'labelText'],
    data: function(){
        return {

        }
    }, 
    template: `
    <div class="form-group" v-bind:class="columnSize">
        <label v-bind:for="elementId">{{labelText}}</label>
        <input v-bind:type="formType" class="form-control" v-bind:id="elementId" v-bind:placeholder="placeholderText">
    </div>
    `
});

Vue.component('form-component', {
    data: function () {
      return {
      }
    },
    template: `
        <form>
        <div class="form-row">
            <form-input label-text='Email' form-type="email" column-size="col-md-6" element-id="inputEmail14" placeholder-text="Email"></form-input>
            <form-input label-text='Password' form-type="password" column-size="col-md-6" element-id="inputPassword4" placeholder-text="Password"></form-input>
        </div>
        <div class="form-group">
            <form-input label-text='Address' form-type="text" element-id="inputAddress" placeholder-text="1234 Main St"></form-input>
        </div>
        <div class="form-group">
            <form-input label-text='Address 2' form-type="text" element-id="inputAddress2" placeholder-text="Apartment, studio, or floor"></form-input>
        </div>
        <div class="form-row">
            <form-input label-text='City' form-type="text" column-size="col-md-6" element-id="inputCity"></form-input>
            <div class="form-group col-md-4">
                <label for="inputState">Region</label>
                <select id="inputState" class="form-control">
                    <option selected>Choose...</option>
                    <option>...</option>
                </select>
            </div>
            <form-input label-text='Postcode' form-type="text" column-size="col-md-2" element-id="inputZip"></form-input>
        </div>
        <div class="form-group">
            <div class="form-check">
                <input class="form-check-input" type="checkbox" id="gridCheck">
                <label class="form-check-label" for="gridCheck">
                    Check me out
                </label>
            </div>
        </div>
        <button type="submit" class="btn btn-primary">Sign in</button>
    </form>
    `
  })
  

new Vue({
    el: '#app'
})