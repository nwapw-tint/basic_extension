var blacklist = new Array("www.youtube.com", "playcode.io", "", "", "", "", "", "", "", "");
var host = window.location.host;
for (var i = 0; i < blacklist.length; i++) {
  if (host === blacklist[i]) {
    document.writeln("Banned!");
    break;
  } else {
    document.writeln("Safe!");
  }
}