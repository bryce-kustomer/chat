window.intercomSettings = {
  app_id: "...",
  user_id: "419",
  name: "Juanma Molina", // This,
  email: "juanma@reply.ai", // this
  created_at: 1481805899,
  organization: "Test 2019.1", // and this
  support_plan: "TIER1",
  widget: {
    "activator": "#Intercom"
  }
};

(function(window, document, kustomer, undefined) {
  window.Kustomer = kustomer;
  kustomer._q = [];
  kustomer._i = [];
  kustomer.init = function(API_KEY) {
    function applyMethod(kustomer, methodName) {
      kustomer[methodName] = function() {
        kustomer._q.push(
          [methodName].concat(Array.prototype.slice.call(arguments, 0))
        )
      }
    }

    var methods = "init identify track describe start stop open close clear on".split(' ');
    for (var i = 0; i < methods.length; i++) {
      applyMethod(kustomer, methods[i]);
    }
    kustomer._i.push(API_KEY);
  };

  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.async = true;
  script.src = "https://cdn.kustomerapp.com/cw/sdk.v1.1.min.js";
  var element = document.getElementsByTagName("script")[0];
  element.parentNode.insertBefore(script, element);
})(this, document, window.Kustomer || {});
// Add your API Key here
Kustomer.init('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlZGY2YzI1MDgwNTdkMDA5NWU5ZTJiNyIsInVzZXIiOiI1ZWRmNmMyNTM5NTMxNTAwMTk1NjYyZDEiLCJvcmciOiI1ZGJiNTE5NzczMDQ0MDAwMWJkMmEyOGEiLCJvcmdOYW1lIjoienp6LWJyeWNlLWdlcnRydWRlIiwidXNlclR5cGUiOiJtYWNoaW5lIiwicG9kIjoicHJvZDEiLCJyb2xlcyI6WyJvcmciLCJvcmcuYWRtaW4iLCJvcmcudHJhY2tpbmciLCJvcmcucGVybWlzc2lvbiIsIm9yZy51c2VyIl0sImF1ZCI6InVybjpjb25zdW1lciIsImlzcyI6InVybjphcGkiLCJzdWIiOiI1ZWRmNmMyNTM5NTMxNTAwMTk1NjYyZDEifQ.kyT2UVZA9kN1QzsHb1LIB-kgSuQ8SScL4rZhYU39tC4');


Kustomer.start({
});
