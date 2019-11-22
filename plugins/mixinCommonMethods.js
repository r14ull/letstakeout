import Vue from 'vue';

Vue.prototype.$errormessage = function(v) {
	if (v.$dirty && v.$error) {
		const messages = this.$store.state.cv.vmessages;
		if (!v.required) {
			return messages.required;
		}
		if (!v.email) {
			return messages.email;
		}
	}
	return null;
};

Vue.prototype.$isValid = function(v) {
	return v.$dirty ? !v.$error : null;
};
