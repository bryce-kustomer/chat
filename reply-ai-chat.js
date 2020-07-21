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
Kustomer.init('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmMTZmMWMwMWM1MTlhMDA5MGI2YWY3YiIsInVzZXIiOiI1ZjE2ZjFiZjgxZGY5NDAwMTljMzMzNjMiLCJvcmciOiI1ZGJiNTE5NzczMDQ0MDAwMWJkMmEyOGEiLCJvcmdOYW1lIjoienp6LWJyeWNlLWdlcnRydWRlIiwidXNlclR5cGUiOiJtYWNoaW5lIiwicG9kIjoicHJvZDEiLCJyb2xlcyI6WyJvcmcudHJhY2tpbmciXSwiYXVkIjoidXJuOmNvbnN1bWVyIiwiaXNzIjoidXJuOmFwaSIsInN1YiI6IjVmMTZmMWJmODFkZjk0MDAxOWMzMzM2MyJ9.2pUOy54aqRQIEPP79bfYHihv7zaYHm6ZNUSG1Z-2OzA');


Kustomer.start({});
