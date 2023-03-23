import "./jasmineSetup";

import "jasmine-core/lib/jasmine-core/jasmine.css";
import "jasmine-core/lib/jasmine-core/jasmine-html.js";
import "jasmine-core/lib/jasmine-core/boot.js";

import "./exercise.test.js";

(function bootstrap() {
  if (window.jasmineRef) {
    location.reload();

    return;
  }

  window.onload(new Event("anything"));
  window.jasmineRef = jasmine.getEnv();
})();
