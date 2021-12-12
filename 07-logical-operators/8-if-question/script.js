// This alert will be show
if (-1 || 0) alert( 'first' );

// This alert will not be show.
if (-1 && 0) alert( 'second' );

// This alert will be show.
if (null || -1 && 1) alert( 'third' );