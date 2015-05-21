/** 
 * jspsych-call-function
 * plugin for calling an arbitrary function during a jspsych experiment
 * Josh de Leeuw
 * 
 * documentation: https://github.com/jodeleeuw/jsPsych/wiki/jspsych-call-function
 * 
**/

(function($) {
    jsPsych['save-info'] = (function() {

        var plugin = {};

        plugin.create = function(params) {
            var trials = new Array(1);
            trials[0] = {
                "id": params.id,
                "order": params.order,
                "cb": params.cb,
                "other": params.other
            };
            return trials;
        };

        plugin.trial = function(display_element, trial) {
            
            jsPsych.data.write($.extend({},{
                "id": trial.id,
                "order": trial.order,
                "counterbalance": trial.cb,
                "other": trial.other
            },trial.data));
            

            jsPsych.finishTrial();
        };

        return plugin;
    })();
})(jQuery);
