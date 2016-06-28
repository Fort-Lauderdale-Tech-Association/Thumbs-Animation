var voteUp   = document.getElementById('vote-up');
var voteDown = document.getElementById('vote-down');

var handUp = once(function() {
    var total = Number(voteUp.innerHTML);
    total += 1;
    voteUp.innerHTML = total;
    saveVote();
});

voteUp.addEventListener('click', handUp);

var handDown = once(function() {
    var total = Number(voteDown.innerHTML);
    total -= 1;
    voteDown.innerHTML = total;
    saveVote();
});

voteDown.addEventListener('click', handDown);

function once(fn, context) {
    var result;

        return function() {
            if(fn) {
                result = fn.apply(context);
                fn = null;
            }
              return result;
        };
}

function saveVote() {
    var votes = {
      voteUp  : voteUp.innerHTML,
      voteDown : voteDown.innerHTML
    };
      localStorage.setItem('data', JSON.stringify(votes));
}

function loadVote() {
    var votes = JSON.parse(localStorage.getItem('data'));
        if(votes){
            voteUp.innerHTML = votes.voteUp || 0;
            voteDown.innerHTML = votes.voteDown || 0;
        }
}

loadVote();





