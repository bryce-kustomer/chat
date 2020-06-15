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
Kustomer.init('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlZTdiYTQ0MDM1NzUyMDA5NjBiMzNmNiIsInVzZXIiOiI1ZWU3YmE0MzBjZmEwZTAwMTk3YTJkYzAiLCJvcmciOiI1NzBmYWQ5ZDkwMDFiYzEwMDAxNjNiMjgiLCJvcmdOYW1lIjoia3VzdG9tZXIiLCJ1c2VyVHlwZSI6Im1hY2hpbmUiLCJwb2QiOiJwcm9kMSIsInJvbGVzIjpbIm9yZy50cmFja2luZyJdLCJhdWQiOiJ1cm46Y29uc3VtZXIiLCJpc3MiOiJ1cm46YXBpIiwic3ViIjoiNWVlN2JhNDMwY2ZhMGUwMDE5N2EyZGMwIn0.Rz2QkNQh1ZUxKuYEgykPtOHwcOz7Z6WcfJzJ9WOgvvE');

Kustomer.describe('conversation', {
  email: `${window.intercomSettings.email}`,
});

Kustomer.describe('conversation', {
  custom: {
    platformStr: `reply.ai`,
    onWhichPageStr: `${document.title}`,
    replyAiOrgStr: `${window.intercomSettings.organization}`
  }
});

Kustomer.start({
  form: "5ee791afd6639b0095d8c629"
});