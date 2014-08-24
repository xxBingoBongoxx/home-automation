define([
    //libs
    'backbone'
], function (
    // libs
    Backbone
    ) {
    'use strict';

    return Backbone.View.extend({
        initialize: function (options, context) {
            _.bindAll(this, '_createClass', 'getClass');
            var that = this;

            _.extend(that, {
                options: _.extend({}, options || {}),
                Ctx: context
            });

            that._createClass();
        },
        getClass: function () {
            return this.MoreartyClass;
        },
        _createClass: function () {
            var that = this;

            that.MoreartyClass = that.Ctx.createClass({
                componentDidMount: function () {
                    var state = this.getState();
                    Router({
                        '/': state.set.bind(state, 'nowShowing', that._routes.DASHBOARD),
                        '/dashboard': state.set.bind(state, 'nowShowing', that._routes.DASHBOARD),
                        '/widgets': state.set.bind(state, 'nowShowing', that._routes.WIDGETS)
                    }).init();
                },

                render: function () {
                    var __ = that.Ctx.React.DOM;
                    return __.div({ className: 'text', 'data-app-id': 'home-automation' });
                }
            });
        },
        _routes: Object.freeze({
            'DASHBOARD': 'dashboard',
            'WIDGETS': 'widgets'
        })
    });
});
