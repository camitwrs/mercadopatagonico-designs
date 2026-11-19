// Elementos del sur de Chile para el diseño 4: cordillera, llavero de hotel.

// Cordillera de la Patagonia: tres planos de montañas con cumbres nevadas y las tres torres del Paine.
export function cordilleraSVG() {
  const cap = (x, y, s) => '<path d="M ' + (x - s * 0.5) + ' ' + (y + s * 0.45) + ' L ' + x + ' ' + y + ' L ' + (x + s * 0.45) + ' ' + (y + s * 0.4) + ' L ' + (x + s * 0.2) + ' ' + (y + s * 0.3) + ' L ' + x + ' ' + (y + s * 0.55) + ' L ' + (x - s * 0.2) + ' ' + (y + s * 0.32) + ' Z" class="snow"/>';
  const tower = (x, top) => '<path d="M ' + (x - 9) + ' 165 L ' + (x - 5.5) + ' ' + top + ' L ' + (x + 5.5) + ' ' + top + ' L ' + (x + 9) + ' 165 Z"/>';
  return '<svg viewBox="0 0 600 220" preserveAspectRatio="xMidYMax meet" fill="none" xmlns="http://www.w3.org/2000/svg">' +
    '<g class="rg r1"><path fill="var(--ridge1)" d="M0 220 V150 L60 110 L95 128 L150 70 L190 105 L240 85 L300 140 L350 95 L420 60 L470 110 L520 90 L600 130 V220 Z"/>' + cap(150, 70, 38) + cap(420, 60, 42) + cap(240, 85, 28) + '</g>' +
    '<g class="rg r2" fill="var(--ridge2)"><path d="M0 220 V175 L70 140 L120 160 L200 105 L260 150 L330 120 L400 165 L470 130 L540 160 L600 140 V220 Z"/>' + tower(332, 72) + tower(356, 54) + tower(380, 68) + '</g>' +
    '<g class="rg r3"><path fill="var(--ridge3)" d="M0 220 V195 L90 175 L170 190 L260 165 L350 192 L450 170 L540 190 L600 178 V220 Z"/></g></svg>';
}

// Llavero de habitación de hotel, colgado de la etiqueta de despacho.
export function keyTagSVG(tag) {
  return '<svg width="90" height="130" viewBox="0 0 90 130" fill="none" xmlns="http://www.w3.org/2000/svg">' +
    '<path d="M 88 14 Q 68 32 44 38" stroke="#8A8F93" stroke-width="1.6"/><circle cx="88" cy="14" r="4.5" fill="var(--bg)" stroke="#8A8F93" stroke-width="1.6"/>' +
    '<circle cx="44" cy="42" r="6.5" stroke="#8A8F93" stroke-width="2.2"/>' +
    '<rect x="22" y="50" width="44" height="72" rx="9" fill="' + tag + '"/><circle cx="44" cy="61" r="3.6" fill="var(--bg)"/>' +
    '<text x="44" y="92" text-anchor="middle" font-family="IBM Plex Sans Condensed, sans-serif" font-weight="600" font-size="23" fill="#12262C">MP</text>' +
    '<path d="M 31 99 H 57" stroke="#12262C" stroke-opacity=".5"/>' +
    '<text x="44" y="111" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="6.2" letter-spacing=".5" fill="#12262C">MAGALLANES</text></svg>';
}
