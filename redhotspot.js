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

var viewYaw;
var viewPitch;


function updateSceneName(scene) {
  sceneNameElement.innerHTML = sanitize(scene.data.name);
  window.marzipano_viewer = viewer;
}

function logYawPitch() {
  viewYaw = viewer.view().yaw();
  viewPitch = viewer.view().pitch();
  document.getElementById('coordinates').textContent = "yaw: "+viewYaw+" pitch: "+viewPitch;
}

function moveHotspot() {
scene.hotspotContainer().createHotspot(document.querySelector("#redhotspot"), { yaw: viewYaw, pitch: viewPitch });
}

window.addEventListener('click', logYawPitch);
window.addEventListener('click', moveHotspot);
