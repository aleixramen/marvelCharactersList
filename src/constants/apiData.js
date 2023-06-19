export const PUBLIC_KEY = "f74dfd4dc6c26525ff7da12ccd731d2b";

export const PRIVATE_KEY = "d3084937c3eb5f9cd00e22721dff705257f0a256";

export const HASH_ALGORITHM = "11c404d8b1c8624b94a889b396ad4dcb";

export const URL_GET_CHARACTERS = `https://gateway.marvel.com/v1/public/characters?ts=2&apikey=${PUBLIC_KEY}&hash=${HASH_ALGORITHM}`;

export const URL_GET_CHARACTERS_PAGINATION = (pageSize, currentPage) => `https://gateway.marvel.com/v1/public/characters?ts=2&apikey=${PUBLIC_KEY}&hash=${HASH_ALGORITHM}&limit=${pageSize}&offset=${(currentPage - 1) * pageSize}`;

export const URL_GET_CHARACTER_DETAIL_INFO = (characterId) => `https://gateway.marvel.com/v1/public/characters/${characterId}?ts=2&apikey=${PUBLIC_KEY}&hash=${HASH_ALGORITHM}`;
