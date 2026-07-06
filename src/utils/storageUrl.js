const API_BASE = import.meta.env.VITE_API_URL ?? 'http://localhost:8000';

// usar este apenas quando partilhar, ou seja, apenas quando usar PC como servidor
// const API_BASE = import.meta.env.VITE_API_URL ?? 'http://192.168.0.200:8000';

/**
 * Monta URL pública para ficheiros em storage/app/public (via /storage symlink).
 * Devolve null se o caminho for inválido (evita /storage/null no HTML).
 */
export function storageUrl(path, base = API_BASE) {
  if (path == null) return null;
  const s = String(path).trim();
  if (s === '' || s === 'null' || s === 'undefined') return null;
  if (s.startsWith('http://') || s.startsWith('https://')) return s;
  const clean = s.replace(/^\/+/, '');
  if (clean.startsWith('storage/')) {
    return `${base.replace(/\/+$/, '')}/${clean}`;
  }
  return `${base.replace(/\/+$/, '')}/storage/${clean}`;
}

export { API_BASE };
