var Matcher = require('./lib/matcher');

var matcher = new Matcher();

matcher.match('<template></template>').with('<div><p></p></div>');