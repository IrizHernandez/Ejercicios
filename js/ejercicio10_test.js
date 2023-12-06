const recordCollection = {
    2548: {
      albumTitle: 'Slippery When Wet',
      artist: 'Bon Jovi',
      tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
      albumTitle: '1999',
      artist: 'Prince',
      tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
      albumTitle: 'Secreto de Amor',
      artist: 'Joan Sebastian',
      tracks: ['Un Idiota', 'Me Gustas']
    },
    5439: {
      albumTitle: 'Vicente Fernandez para siempre',
      artist: 'Vicente Fernandez',
      tracks: ['Un Millon de Primaveras', 'El Chofer']
    }
  };
  
  function updateRecords(records, id, prop, value) {
    if (value === "") {
      delete records[id][prop];
    } else if (prop !== "tracks") {
      records[id][prop] = value;
    } else {
      records[id][prop] = records[id][prop] || [];
      records[id][prop].push(value);
    }
  
    return records;
  }