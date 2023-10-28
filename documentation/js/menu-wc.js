'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">analytics documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AppModule-025369f5d99f14a74357f2abe29a609bc8da103ea4d15f35f61e971069da212de190728183483f2649f713fa324a1ca773ab05bee54a58bba9cdb3dbf9586692"' : 'data-bs-target="#xs-components-links-module-AppModule-025369f5d99f14a74357f2abe29a609bc8da103ea4d15f35f61e971069da212de190728183483f2649f713fa324a1ca773ab05bee54a58bba9cdb3dbf9586692"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-025369f5d99f14a74357f2abe29a609bc8da103ea4d15f35f61e971069da212de190728183483f2649f713fa324a1ca773ab05bee54a58bba9cdb3dbf9586692"' :
                                            'id="xs-components-links-module-AppModule-025369f5d99f14a74357f2abe29a609bc8da103ea4d15f35f61e971069da212de190728183483f2649f713fa324a1ca773ab05bee54a58bba9cdb3dbf9586692"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CallHistoryComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CallHistoryComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CallHistoryFormComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CallHistoryFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ChartsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ChartsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DashboardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DashboardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DataComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DataComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HistoryComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HistoryComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LineComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LineComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LinebarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LinebarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavbarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NavbarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PlanFormComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PlanFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PlansComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PlansComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SubscriberComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SubscriberComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TextComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TextComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TopComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TopComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/CallHistoryService.html" data-type="entity-link" >CallHistoryService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DashboardService.html" data-type="entity-link" >DashboardService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PlanService.html" data-type="entity-link" >PlanService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SubscriberService.html" data-type="entity-link" >SubscriberService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/CallHistory.html" data-type="entity-link" >CallHistory</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Data.html" data-type="entity-link" >Data</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Plan.html" data-type="entity-link" >Plan</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Plan-1.html" data-type="entity-link" >Plan</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Subscriber.html" data-type="entity-link" >Subscriber</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Text.html" data-type="entity-link" >Text</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});