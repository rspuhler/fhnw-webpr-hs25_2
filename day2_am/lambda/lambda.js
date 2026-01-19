

const id    = x => x;
const konst = x => y => x;
const snd   = x => y => y;

// const T = trueCase => elseCase => trueCase;
// const T = x => y => x; // das ist das gleiche wie oben
const T = konst;
// Hier auch
// const F = trueCase => elseCase => elseCase;
const F = snd;

const and = a => b => a ( b ) ( a );
const or = a => b => a ( a ) ( b );

const flip = f => x => y => f(y)(x)

// ----- special -----

const Tuple = n => [
    parmStore (n + 1) ( [] ) (parms => parms.reduce( (accu, it) => accu(it), parms.pop() ) ), // ctor
    ...Array.from( {length:n}, (it, idx) => iOfN (n) (idx) () )                    // selectors
];

const iOfN = n => i => value => // from n curried params, take argument at position i,
    n === 0
    ? value
    : x => iOfN (n-1) (i-1) ( i === 0 ? x : value );


const parmStore = n => args => onDone =>  // n args to come
    n === 0
    ? onDone(args)
    : arg => parmStore(n - 1)([...args, arg]) (onDone); // store parms in array

const Choice = n => [
    ...Array.from( {length:n}, (it, idx) => parmStore(n+1) ([]) (parms => parms[idx+1] (parms[0]) ) ), // ctors
    id
];




