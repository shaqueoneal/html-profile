!function(e, t) {
  "object" == typeof module && module.exports ? (module.exports = t(),
    module.exports.default = module.exports) : e.alimask = t()
}("undefined" != typeof window ? window : this, function() {
  function r(e) {
    return Object.assign({
      width: 250,
      height: 80,
      color: "#ebebeb",
      alpha: .8,
      font: "10px Arial"
    }, e)
  }
  var c, i;
  return function(e, t) {
    if (!c || !i) {
      if ("undefined" != typeof document)
        c = document.createElement("canvas");
      else {
        var n = module.require("canvas");
        c = new n
      }
      if (i = c && c.getContext && c.getContext("2d"),
      !c || !i)
        return ""
    }
    t = r(t);
    var a = t.width
      , o = t.height;
    return c.width = a,
      c.height = o,
      i.clearRect(0, 0, a, o),
      i.globalAlpha = 0,
      i.fillRect(0, 0, a, o),
      i.globalAlpha = t.alpha,
      i.fillStyle = t.color,
      i.font = t.font,
      i.textAlign = "left",
      i.textBaseline = "bottom",
      i.translate(.1 * a, .9 * o),
      i.rotate(-Math.PI / 12),
      i.fillText(e, 0, 0),
      c.toDataURL()
  }
});

function createWaterMark(e) {
  var t = document.createElement("div");
  t.style.background = "url(" + alimask(e, {
    width: 250,
    height: 150,
    alpha: .2,
    color: "#bbb",
    font: "15px sans-serif"
  }) + ")";
  t.style.position = "fixed";
  t.style.top = "50px";
  t.style.left = "200px";
  t.style.width = "100%";
  t.style.height = "100%";
  t.style.pointerEvents = "none";
  t.style.zIndex = 999;
  document.body.appendChild(t)
}

function parseUrlParam(paramStr) {
  let o = {};
  if (!paramStr) {
    return o;
  }

  if (paramStr[0] === '?') {
    paramStr = paramStr.substr(1);
  }

  let aoAttr = paramStr.split('&');
  aoAttr.map((d, i) => {
    let aTuple = d.split('=');
    if (aTuple[1] !== undefined) {
      o[aTuple[0]] = aTuple[1];
    } else {
      o[aTuple[0]] = true;
    }
  });

  return o;
}

function initWaterMarker() {
  var e = decodeURIComponent(parseUrlParam(location.search).watermark || '');
  e && createWaterMark(e)
}

initWaterMarker();
