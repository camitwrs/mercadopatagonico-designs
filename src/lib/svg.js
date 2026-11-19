// Generado a partir de DESIGN/figma-landing-plugin/code.js: mismos dibujos que los diseños de Figma.
export const C2 = { blanco: '#FFFFFF', carbon: '#1F2326', acero: '#C9CED1', aceroL: '#EEF0F1', aceroD: '#8D969B', cobre: '#B8693A', papel: '#F7F5EF', gris: '#555D63' };
export const C3 = { calafate: '#2D1630', calafate2: '#43213F', lana: '#EDE6D8', lana2: '#F8F4EC', coiron: '#C2A35A', ceniza: '#6E6660', brasa: '#D2603A', baya: '#5B2A63', bayaClara: '#B27BB8' };
export const C5 = { lino: '#F7F4EE', lino2: '#EFE9DE', carbon: '#1B1D1F', carbon2: '#151618', oro: '#B89B5E', vino: '#6B1F2A', mut: '#5E6064' };
export const C7 = { grafito: '#1D2125', grafito2: '#272D33', grafito3: '#14181B', kraft: '#C9A36B', kraft2: '#E9DCC3', papel: '#F5F1E8', naranja: '#F26B21', mut: '#5B6166' };

export function rng(seed) {
  let a = seed >>> 0;
  return function () {
    a = (a + 0x6D2B79F5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function svgOpen(w, h) { return '<svg width="' + w + '" height="' + h + '" viewBox="0 0 ' + w + ' ' + h + '" fill="none" xmlns="http://www.w3.org/2000/svg">'; }

export function n1(v) { return v.toFixed(1); }

export function branchSVG(h, stem, berry, leaf) {
  const k = h / 120;
  const lf = (cx, cy, a) => '<ellipse cx="' + cx + '" cy="' + cy + '" rx="9" ry="3.4" fill="' + leaf + '" transform="rotate(' + a + ' ' + cx + ' ' + cy + ')"/>';
  const by = (x1, y1, cx, cy, r) => '<line x1="' + x1 + '" y1="' + y1 + '" x2="' + cx + '" y2="' + cy + '" stroke="' + stem + '" stroke-width="1.4"/>' +
    '<circle cx="' + cx + '" cy="' + cy + '" r="' + r + '" fill="' + berry + '"/>' +
    '<circle cx="' + n1(cx - r * 0.3) + '" cy="' + n1(cy - r * 0.35) + '" r="' + n1(r * 0.22) + '" fill="#FFFFFF" fill-opacity="0.35"/>';
  return '<svg width="' + n1(74 * k) + '" height="' + n1(h) + '" viewBox="0 0 74 120" fill="none" xmlns="http://www.w3.org/2000/svg">' +
    '<path d="M 30 118 C 26 86, 48 66, 40 14" stroke="' + stem + '" stroke-width="2.4" stroke-linecap="round"/>' +
    lf(23, 93, -28) + lf(40, 83, 28) + lf(27, 64, -30) + lf(47, 42, 30) + lf(33, 33, -28) + lf(46, 21, 25) +
    by(36, 76, 54, 86, 7) + by(35, 72, 20, 76, 7.5) + by(41, 52, 57, 60, 7) + by(41, 46, 28, 48, 6.5) + by(41, 31, 50, 32, 5.5) + '</svg>';
}

export function clocheSVG(w, dome, base, knob) {
  return '<svg width="' + w + '" height="' + n1(w * 0.75) + '" viewBox="0 0 64 48" fill="none" xmlns="http://www.w3.org/2000/svg">' +
    '<path d="M 6 36 A 26 26 0 0 1 58 36 Z" fill="' + dome + '"/>' +
    '<rect x="2" y="39" width="60" height="5" rx="2.5" fill="' + base + '"/>' +
    '<circle cx="32" cy="7" r="4" fill="' + knob + '"/></svg>';
}

export function truckSVG(w, color) {
  const h = Math.round(w * 22 / 36);
  return '<svg width="' + w + '" height="' + h + '" viewBox="0 0 36 22" fill="none" xmlns="http://www.w3.org/2000/svg"><g stroke="' + color + '" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round">' +
    '<rect x="1" y="3" width="21" height="13" rx="2"/><path d="M22 7 H29 L34 12 V16 H22 Z"/></g><circle cx="9" cy="18" r="2.6" fill="' + color + '"/><circle cx="27" cy="18" r="2.6" fill="' + color + '"/></svg>';
}

export function iconSVG(kind, s, color) {
  const st = ' stroke="' + color + '" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"';
  const p = {
    box: '<path d="M3 8 L12 3 L21 8 L21 17 L12 22 L3 17 Z"' + st + '/><path d="M3 8 L12 13 L21 8 M12 13 V22"' + st + '/>',
    house: '<path d="M3 11 L12 3 L21 11 V21 H3 Z"' + st + '/><path d="M10 21 V15 H14 V21"' + st + '/>',
    cutlery: '<path d="M7 3 V10 Q7 12.5 9 12.5 Q11 12.5 11 10 V3 M9 3 V21"' + st + '/><path d="M17 21 V3 Q21 5 20.5 12 H17"' + st + '/>',
    cloche: '<path d="M3 17 A9 9 0 0 1 21 17 Z"' + st + '/><path d="M2 20.5 H22 M12 8 V6"' + st + '/><circle cx="12" cy="5" r="1.3" fill="' + color + '"/>',
    cup: '<path d="M4 9 H16 V14 A5 5 0 0 1 11 19 H9 A5 5 0 0 1 4 14 Z"' + st + '/><path d="M16 10.5 H18 A2.5 2.5 0 0 1 18 15.5 H16 M8 3 Q7 5 8 6.5 M12 3 Q11 5 12 6.5"' + st + '/>',
    hotel: '<path d="M5 21 V4 H15 V21 M15 9 H19 V21 M3 21 H21 M8.5 8 H11.5 M8.5 12 H11.5 M8.5 16 H11.5"' + st + '/>',
    basket: '<path d="M3 10 H21 L19 20 H5 Z"' + st + '/><path d="M8 10 L11 4 M16 10 L13 4 M9.5 14 V17 M14.5 14 V17"' + st + '/>',
    cart: '<path d="M3 4 H6 L8.5 15 H19 L21 7 H7"' + st + '/><circle cx="10" cy="19" r="1.6" fill="' + color + '"/><circle cx="17" cy="19" r="1.6" fill="' + color + '"/>'
  };
  return '<svg width="' + s + '" height="' + s + '" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">' + p[kind] + '</svg>';
}

export function panSVG(w) {
  const cu = C2.cobre, cuD = '#8E4F28';
  return svgOpen(w, Math.round(w * 0.46)) + '<g transform="scale(' + n1(w / 220) + ')">' +
    '<rect x="150" y="38" width="66" height="10" rx="5" fill="' + cuD + '"/><circle cx="206" cy="43" r="2.4" fill="#FFFFFF" fill-opacity="0.6"/>' +
    '<path d="M 20 24 H 150 V 84 a 10 10 0 0 1 -10 10 H 30 a 10 10 0 0 1 -10 -10 Z" fill="' + cu + '"/>' +
    '<rect x="14" y="16" width="142" height="12" rx="5" fill="' + cuD + '"/>' +
    '<rect x="32" y="40" width="7" height="42" rx="3.5" fill="#FFFFFF" fill-opacity="0.32"/></g></svg>';
}

export function zigzagSVG(w, color) {
  const n = Math.max(1, Math.round(w / 12)), tooth = w / n;
  let d = 'M 0 0';
  for (let i = 0; i < n; i++) d += ' L ' + n1((i + 0.5) * tooth) + ' 10 L ' + n1((i + 1) * tooth) + ' 0';
  return svgOpen(w, 10) + '<path d="' + d + ' Z" fill="' + color + '"/></svg>';
}

export function garlandSVG(w, cord, b1, b2, leaf) {
  const h = 66, n = Math.max(2, Math.round(w / 100)), seg = w / n, r = rng(5);
  let d = 'M 0 6';
  for (let i = 0; i < n; i++) d += ' Q ' + n1(seg * (i + 0.5)) + ' 30 ' + n1(seg * (i + 1)) + ' 6';
  let s = svgOpen(w, h) + '<path d="' + d + '" stroke="' + cord + '" stroke-width="2" stroke-linecap="round"/>';
  for (let i = 0; i < n; i++) {
    [0.2, 0.4, 0.6, 0.8].forEach((t) => {
      const x = seg * i + seg * t;
      const y = 6 * (1 - t) * (1 - t) + 60 * t * (1 - t) + 6 * t * t;
      const len = 8 + r() * 18, rad = 5 + r() * 4, col = r() > 0.3 ? b1 : b2;
      s += '<g class="sprig" style="transform-origin:' + n1(x) + 'px ' + n1(y) + 'px;animation-delay:-' + ((i * 4 + [0.2, 0.4, 0.6, 0.8].indexOf(t)) * 0.45).toFixed(2) + 's">';
      s += '<line x1="' + n1(x) + '" y1="' + n1(y) + '" x2="' + n1(x) + '" y2="' + n1(y + len) + '" stroke="' + cord + '" stroke-width="1.4"/>';
      s += '<circle cx="' + n1(x) + '" cy="' + n1(y + len + rad) + '" r="' + n1(rad) + '" fill="' + col + '"/>';
      s += '<circle cx="' + n1(x - rad * 0.3) + '" cy="' + n1(y + len + rad * 0.7) + '" r="' + n1(rad * 0.22) + '" fill="#FFFFFF" fill-opacity="0.35"/>';
      if (r() > 0.5) s += '<ellipse cx="' + n1(x + 7) + '" cy="' + n1(y + 3) + '" rx="7" ry="2.6" fill="' + leaf + '" transform="rotate(25 ' + n1(x + 7) + ' ' + n1(y + 3) + ')"/>';
      s += '</g>';
    });
  }
  return s + '</svg>';
}

export function tableSVG(w, st) {
  const h = Math.round(w * 520 / 560);
  const tines = [0, 1, 2].map((i) => '<rect x="' + (66 + i * 10) + '" y="170" width="2.5" height="62" rx="1.2" fill="' + st.line + '"/>').join('');
  return '<svg width="' + w + '" height="' + h + '" viewBox="0 0 560 520" fill="none" xmlns="http://www.w3.org/2000/svg">' +
    '<rect x="1" y="1" width="558" height="518" rx="8" stroke="' + st.gold + '" stroke-opacity="0.35"/>' +
    '<circle cx="280" cy="280" r="170" fill="' + st.plate + '" stroke="' + st.line + '" stroke-opacity="0.25"/>' +
    '<circle class="ring" cx="280" cy="280" r="138" stroke="' + st.gold + '" stroke-width="2" stroke-opacity="0.8"/>' +
    '<circle cx="280" cy="280" r="100" stroke="' + st.line + '" stroke-opacity="0.2"/>' +
    '<g class="fork">' + tines + '<path d="M 67 232 Q 67 252 78 252 Q 89 252 89 232" stroke="' + st.line + '" stroke-width="2.5"/><rect x="75.5" y="252" width="5" height="170" rx="2.5" fill="' + st.line + '"/></g>' +
    '<g class="knife"><path d="M 484 170 Q 506 190 504 270 H 484 Z" fill="' + st.line + '"/><rect x="484" y="270" width="20" height="152" rx="9" fill="' + st.line + '"/></g>' +
    '<g class="spoon"><ellipse cx="538" cy="205" rx="12" ry="22" fill="' + st.line + '"/><rect x="535" y="225" width="6" height="190" rx="3" fill="' + st.line + '"/></g>' +
    '<circle cx="430" cy="90" r="34" stroke="' + st.line + '" stroke-opacity="0.5" stroke-width="2"/><circle class="glass" cx="430" cy="90" r="22" fill="' + st.glass + '"/>' +
    '<circle cx="350" cy="64" r="24" stroke="' + st.line + '" stroke-opacity="0.45" stroke-width="2"/><circle cx="350" cy="64" r="15" fill="' + st.glass + '" fill-opacity="0.6"/>' +
    '<circle cx="110" cy="92" r="44" fill="' + st.plate + '" stroke="' + st.line + '" stroke-opacity="0.25"/><circle cx="110" cy="92" r="30" stroke="' + st.gold + '" stroke-opacity="0.6"/></svg>';
}

export function orn5SVG(c) {
  return svgOpen(60, 10) + '<path d="M 6 5 L 11 0 L 16 5 L 11 10 Z M 25 5 L 30 0 L 35 5 L 30 10 Z M 44 5 L 49 0 L 54 5 L 49 10 Z" fill="' + c + '"/></svg>';
}

export function cutlerySVG(h, c) {
  return '<svg width="' + Math.round(h * 0.4) + '" height="' + h + '" viewBox="0 0 80 200" fill="none" xmlns="http://www.w3.org/2000/svg">' +
    [0, 1, 2].map((i) => '<rect x="' + (10 + i * 10) + '" y="6" width="2.5" height="56" rx="1.2" fill="' + c + '"/>').join('') +
    '<path d="M 11 62 Q 11 82 22 84 Q 33 82 33 62" stroke="' + c + '" stroke-width="2.5"/><rect x="19.5" y="84" width="5" height="108" rx="2.5" fill="' + c + '"/>' +
    '<path d="M 56 6 Q 76 28 74 100 H 56 Z" fill="' + c + '"/><rect x="56" y="100" width="18" height="92" rx="8" fill="' + c + '"/></svg>';
}

export function platoMarkSVG(s, c, gold) {
  return '<svg width="' + s + '" height="' + s + '" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">' +
    '<circle cx="30" cy="30" r="20" stroke="' + c + '" stroke-width="3"/><circle cx="30" cy="30" r="12" stroke="' + gold + '" stroke-width="2"/>' +
    '<path d="M 4 14 V 46 M 56 14 V 46" stroke="' + c + '" stroke-width="3" stroke-linecap="round"/></svg>';
}

export function barcodeSVG(w, h, c) {
  const r = rng(w + 7);
  let s = svgOpen(w, h), x = 0;
  while (x < w - 4) {
    const bw = 1 + Math.floor(r() * 3), gp = 1 + Math.floor(r() * 2);
    s += '<rect x="' + x + '" width="' + bw + '" height="' + h + '" fill="' + c + '"/>';
    x += bw + gp;
  }
  return s + '</svg>';
}

export function palletSVG(w) {
  const k = '#C9A36B', kd = '#A8824A', h = Math.round(w * 0.83);
  const box = (x, y, bw, bh) => '<g class="pbox"><rect x="' + x + '" y="' + y + '" width="' + bw + '" height="' + bh + '" rx="3" fill="' + k + '" stroke="' + kd + '" stroke-width="1.5"/>' +
    '<rect x="' + (x + bw / 2 - 5) + '" y="' + y + '" width="10" height="' + bh + '" fill="' + kd + '" fill-opacity="0.35"/>' +
    '<circle cx="' + (x + bw - 21) + '" cy="' + (y + 20) + '" r="12" fill="#FFFFFF" fill-opacity="0.92"/>' +
    '<g transform="translate(' + (x + bw - 21) + ' ' + (y + 20) + ')" stroke="#1D2125" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><path d="M-5 -6.5 V-1.5 Q-5 1 -2.5 1 Q0 1 0 -1.5 V-6.5 M-2.5 -6.5 V6.5"/><path d="M4 6.5 V-6.5 Q7.5 -4.5 7 0.5 H4"/></g>' +
    '<rect x="' + (x + 8) + '" y="' + (y + bh - 24) + '" width="24" height="16" rx="1.5" fill="#FFFFFF" fill-opacity="0.92"/>' +
    '<path d="M ' + (x + 11) + ' ' + (y + bh - 18) + ' H ' + (x + 29) + ' M ' + (x + 11) + ' ' + (y + bh - 14) + ' H ' + (x + 24) + '" stroke="#1D2125" stroke-width="1.4"/></g>';
  return '<svg width="' + w + '" height="' + h + '" viewBox="0 0 240 200" fill="none" xmlns="http://www.w3.org/2000/svg">' +
    box(10, 112, 70, 56) + box(85, 112, 70, 56) + box(160, 112, 70, 56) + box(47, 54, 70, 56) + box(122, 54, 70, 56) + box(85, -4, 70, 56) +
    '<rect x="2" y="170" width="236" height="9" rx="2" fill="#8C6B3E"/><rect x="2" y="184" width="236" height="9" rx="2" fill="#8C6B3E"/>' +
    '<rect x="14" y="179" width="22" height="5" fill="#6E532F"/><rect x="109" y="179" width="22" height="5" fill="#6E532F"/><rect x="204" y="179" width="22" height="5" fill="#6E532F"/></svg>';
}

export function boxMarkSVG(s, c, tape) {
  return '<svg width="' + s + '" height="' + s + '" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">' +
    '<path d="M 6 14 L 24 5 L 42 14 L 42 34 L 24 43 L 6 34 Z" stroke="' + c + '" stroke-width="3" stroke-linejoin="round"/>' +
    '<path d="M 6 14 L 24 23 L 42 14 M 24 23 V 43" stroke="' + c + '" stroke-width="3" stroke-linejoin="round"/>' +
    '<path d="M 15 9.5 L 33 18.5 V 25" stroke="' + tape + '" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>';
}

// Campana de servicio (cloche) con la cordillera adentro: alimentos para hotelería, del sur de Chile.
export function clocheSurSVG(s, c, accent) {
  return '<svg width="' + s + '" height="' + s + '" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">' +
    '<path d="M 12 36 L 20.5 21 L 25 28 L 29.5 23 L 37 36 Z" fill="' + accent + '"/>' +
    '<g class="lid"><path d="M 6 36 A 18 18 0 0 1 42 36" stroke="' + c + '" stroke-width="3" stroke-linecap="round"/><path d="M 24 18 V 14.5" stroke="' + c + '" stroke-width="3" stroke-linecap="round"/><circle cx="24" cy="11" r="3" fill="' + accent + '"/></g>' +
    '<path d="M 3 36 H 45" stroke="' + c + '" stroke-width="3" stroke-linecap="round"/>' +
    '<path d="M 9 42 H 39" stroke="' + c + '" stroke-width="3" stroke-linecap="round" stroke-opacity=".5"/></svg>';
}
