<template>
    <div class="worlds-container">
        <div class="worlds-content">
            <div class="description">
                <div class="description-header">
                    <p class="dh1">{{ descriptionHeadO }}</p>
                    <p class="dh2">{{ descriptionHeadT }}</p>
                </div>
                <div class="description">
                    {{ description }}
                </div>
                <div class="world-links">
                    <ul class="location-links">
                        <li class="loc-link">North America & Carribean</li>
                        <li class="loc-link">Hawaii</li>
                        <li class="loc-link">Europe</li>
                    </ul>
                </div>
            </div>
            <div class="location-details">
                <div class="loc-contents">
                    <div class="loc-r1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white" class="bi bi-arrow-left" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white" class="bi bi-arrow-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                        </svg>
                    </div>
                    <div class="loc-r2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white" class="bi bi-cloud-minus" viewBox="0 0 16 16">
                            <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white" class="bi bi-cloud-rain" viewBox="0 0 16 16">
                            <path d="M4.158 12.025a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317zm3 0a.5.5 0 0 1 .316.633l-1 3a.5.5 0 0 1-.948-.316l1-3a.5.5 0 0 1 .632-.317zm3 0a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317zm3 0a.5.5 0 0 1 .316.633l-1 3a.5.5 0 1 1-.948-.316l1-3a.5.5 0 0 1 .632-.317zm.247-6.998a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 11H13a3 3 0 0 0 .405-5.973zM8.5 2a4 4 0 0 1 3.976 3.555.5.5 0 0 0 .5.445H13a2 2 0 0 1 0 4H3.5a2.5 2.5 0 1 1 .605-4.926.5.5 0 0 0 .596-.329A4.002 4.002 0 0 1 8.5 2z"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white" class="bi bi-compass" viewBox="0 0 16 16">
                            <path d="M8 16.016a7.5 7.5 0 0 0 1.962-14.74A1 1 0 0 0 9 0H7a1 1 0 0 0-.962 1.276A7.5 7.5 0 0 0 8 16.016zm6.5-7.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
                            <path d="m6.94 7.44 4.95-2.83-2.83 4.95-4.949 2.83 2.828-4.95z"/>
                        </svg>
                    </div>
                    <div class="loc-r3">
                        <p class="loc-main">La Quinta, California</p>
                    </div>
                    <div class="loc-r4">
                        <p class="loc-name">Hideaway</p>
                    </div>
                    <div class="loc-r5">
                        <p class="coords">33.67059&#176; N/ -116.26089&#176; W</p>
                    </div>
                    <div class="loc-c2">
                        <img class="loc-img" src="@/assets/images/home/im-3.jpg" alt="hehehe">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script type='module' src='./WorldMap.ts'></script>