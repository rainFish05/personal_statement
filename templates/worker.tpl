<div class="worker">
    <div class="pieces">
    {{#each workers}}
        <div class="piece">
            <h2 class="project_name" style="display: none">{{worker_name}}</h2>
            <div class="projects">
                <div class="description" style="background-image:url({{worker_image}})">
                    <div class="proShelter top"><img src='{{worker_image}}'></div>
                    <div class="proShelter down"><img src='{{worker_image}}'></div>
                    <div class="descrpt top"><p>{{worker_description}}</p></div>
                    <div class="descrpt down"><p>{{worker_description}}</p></div>
                </div>
                <div class="caption">
                    <a href="{{worker_url}}" target="_blank" class="worker_url">
                        <p>{{worker_name}}_{{worker_date}}</p>
                        <p>{{worker_tags}}</p>
                    </a>
                </div>
            </div>
        </div>
    {{/each}}
     </div>
</div>