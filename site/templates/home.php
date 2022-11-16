<?php snippet('header') ?>
<?= js('@auto') ?>

<div tabindex="0" class="welcome">
    <img src="<?= $site->images() ?>" alt="">
</div>

<main>
    <?php
    $items = $site->structure()->toStructure();
    $offset = "5";
    $chunks = array(
        'left' => $items->limit($offset),
        'right' => $items->offset($offset),
    );

    foreach ($chunks as $key => $items) : ?>

        <ul class="<?= $key ?>">


            <?php
            foreach ($items as $item) : ?>
                <li id="<?= $item->action()->html() ?> ">
                    <h2 data-url="<?= str::slug($item->action()) ?>" id="id<?= $item->indexOf() ?>" class="title" onclick="openPage(this)"><?= $item->action()->html() ?> </h2>
                    <div class="content">
                        <div class="images">

                            <?php $projects = $site->find('projets')->children()->filterBy('category', $item->action())->sortBy('num')->shuffle();

                            ?>
                            <div class="project-title"></div>
                            <div class="informations"></div>
                            <div class="swiper" id="id<?= $item->indexOf() ?>">


                                <div class="swiper-wrapper">
                                    <!-- Slides -->


                                    <?php
                                    foreach ($projects as $project) :
                                        foreach ($project->images()->sortBy("sort") as $image) :
                                    ?>
                                            <div class="swiper-slide">
                                                <img class="swiper-lazy" data-pagination="<?= $image->indexOf($project->images()->sortBy("sort")) + 1 ?> / <?= $project->images()->count()  ?>" data-title="<?= $image->parent()->title() ?> 
                                                <?= $project->indexOf($projects) + 1 ?> / <?= $projects->count()  ?>
                                                " data-caption="<?= e($image->caption()->isNotEmpty(), $image->caption(), $image->parent()->description())  ?>" data-src="<?= $image->url() ?>" alt="">
                                            </div>
                                        <?php endforeach ?>
                                    <?php endforeach ?>
                                </div>


                                <!-- If we need navigation buttons -->

                            </div>
                            <div class="swiper-button-prev"></div>
                            <div class="swiper-button-next"></div>
                            <div class="swiper-pagination"></div>
                        </div>
                    </div>
                </li>
            <?php endforeach ?>

            <?php if ($key == "right") :
                snippet('about');
            endif ?>
        </ul>

    <?php endforeach ?>


</main>
<?= js(['assets/js/swiper.js', 'assets/js/colors.js']) ?>