//format: value (0 and up): name, killer, color

RPS = {
  0: ['R', ['P'], [255, 0, 0]],
  1: ['P', ['S'], [0, 255, 0]],
  2: ['S', ['R'], [0, 0, 255]]
};

RPSLO = {
  0: ['R', ['O', 'P'], [255, 0, 0]],
  1: ['P', ['S', 'L'], [0, 255, 0]],
  2: ['S', ['O', 'R'], [0, 0, 255]],
  3: ['O', ['L', 'P'], [0, 255, 255]],
  4: ['L', ['R', 'S'], [255, 255, 0]]
}

var rules = [RPS, RPSLO];
