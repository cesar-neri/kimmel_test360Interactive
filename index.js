/*
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';

// Create viewer.
var viewer = new Marzipano.Viewer(document.getElementById('pano'));
viewer.controls().enableMethodGroup('arrowKeys');

//Scene Variables
var courtyard = "https://image.ibb.co/camiS9/courtyard360.jpg";
var patientRoom = "https://image.ibb.co/kjS81e/patientroom360.jpg";
var droneWater = "https://image.ibb.co/j71kWp/PHOTO15_MULTISHOT_0081_nodrone.jpg";

// Create source.
var source = Marzipano.ImageUrlSource.fromString(
  droneWater
);

// Create geometry.
var geometry = new Marzipano.EquirectGeometry([{ width: 4000 }]);

// Create view.
var limiter = Marzipano.RectilinearView.limit.traditional(100*Math.PI/180, 120*Math.PI/180);
var view = new Marzipano.RectilinearView({ yaw: Math.PI }, limiter);

// Create scene.
var scene = viewer.createScene({
  source: source,
  geometry: geometry,
  view: view,
  pinFirstLevel: true
});


$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

// Display scene.
scene.switchTo();
