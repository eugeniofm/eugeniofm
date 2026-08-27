---
title: Research
date: 2024-12-16
type: landing

sections:
  - block: markdown
    id: research-overview
    content:
      title: Research Overview
      text: |-
        Soft robots leverage **compliance, flexibility, and deformation** to operate safely in close proximity to people and to function in constrained, uncertain environments. However, the same compliance that enables safe physical interaction also creates major challenges for **modeling, sensing, and control**, especially for continuum robots whose high-dimensional shape changes and nonlinear dynamics are difficult to predict reliably.

        My work investigates **compliant human-robot interaction** as a design principle for addressing these challenges, asking:

        - **How can soft robots help humans?**
        - **How can humans help soft robots?**

        Through my work, the central premise is that integrating **human perception, interpretation, and decision-making** with **soft robotic actuation** can produce capabilities and behaviors that neither agent achieves alone.

        Below is a list of projects that I have worked on throughout my PhD. Feel free to look through them!
    design:
      columns: '1'

  - block: markdown
    id: soft-robots-help-humans
    content:
      title: I. How can soft robots help humans?
      text: |-
        {{< research-entry
          image="/images/research/biorob24.png"
          image_alt="A participant wearing the passive wearable resistance device"
          title="Adaptation and Training Effects from a Passive, Wearable Resistance Device During Exercise"
          citation="Eugenio Frias-Miranda, Hong-Anh A. Nguyen, Jeremy Hampton, Trenner A. Jones, Benjamin Spotts, Matthew Cochran, Deva D. Chan, Laura H. Blumenschein, 2024 10th IEEE RAS/EMBS International Conference for Biomedical Robotics and Biomechatronics (BioRob), 2024"
          pdf="/publication/biorob24/BioRob24_WearableResistanceDevice.pdf"
          video="https://www.youtube.com/watch?v=Ewxa5ES3usY"
        >}}
        The integration of technology into exercise regimens has emerged as a strategy to enhance normal human capabilities and return human motor function after injury or illness by enhancing motor learning. Much research has focused on how active devices, whether confined to a lab or made into a wearable format, can apply forces at set times and conditions to optimize injury prevention and proper movement. As a result, these devices tend to be confined to single movements or simple interventions. A focus on active forces, however, ignores the potential of continuous passive interactions. In this paper, we investigate how passive device behaviors by themselves can contribute to the process of training proper movement. Using a wearable resistance (WR) device, which is outfitted with elastic bands, we apply a force field that passively changes in response to full-body movements. We first develop a method to measure the produced forces from the device without impeding the function and we characterize the device's force generation. We then present a study assessing the impact of the WR device on overhead squat form compared to visual or no feedback. Our findings suggest that the force fields produced while training with the WR device could improve performance in full-body exercises more consistently compared to direct visual feedback, with effects seen on cross-body asymmetry. Our results provide insights into the application of passive wearable resistance technology in practical exercise settings.
        {{< /research-entry >}}

        {{< research-entry
          title="Journal Paper Submission"
          citation="Manuscript details forthcoming"
          placeholder="Project figure forthcoming"
        >}}
        Additional information will be uploaded soon.
        {{< /research-entry >}}
    design:
      columns: '1'

  - block: markdown
    id: humans-help-soft-robots
    content:
      title: II. How can humans help soft robots?
      text: |-
        {{< research-entry
          title="Current Work"
          citation="Publication details forthcoming"
          placeholder="Project figure forthcoming"
        >}}
        Additional information will be uploaded soon.
        {{< /research-entry >}}
    design:
      columns: '1'

  - block: markdown
    id: other-projects
    content:
      title: III. Other Projects
      text: |-
        {{< research-entry
          image="/images/research/localization.png"
          image_alt="Vine robot collision localization experiment"
          title="Vine Robot Localization via Collision"
          citation="Eugenio Frias-Miranda, Alankriti Srivastava, Sicheng Wang, Laura H. Blumenschein, 2023 IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS), 2023"
          pdf="/publication/localization/Vine_Robot_Localization_Via_Collision.pdf"
          video="https://www.youtube.com/watch?v=dF74yGpmTJo"
        >}}
        Localization of robots is a complex task that is often hindered by the sensors these systems use. Due to the majority of field robots being rigid, most of these sensing modalities have the same common faults, such as performance being hindered when their camera vision is obscured. In addition, rigid systems lack flexibility when traversing multiple environments: especially when traversing uneven and unpredictable ground. Soft robots, which can adaptably interact with the environment, could serve as a solution to both problems. One specific soft robot, the Vine Robot, has exhibited excellent performance while moving through constrained, unpredictable environments. This makes the Vine Robot an ideal candidate for a novel method of sensing and localizing in environments, obstacle collision localization. We use our understanding of the nature of Vine Robot motion to be able to predict the tip position of the robot at every instant based on sensor feedback. Through the single obstacle experiments, it was found that our algorithm can provide a precise picture of the tip position of the robot in differing environments. Further, in a multi obstacle demonstration, less than 5% max error relative to the full robot length was observed on the path prediction. Our study helps lay the foundation for a new method for Vine Robot localization using contact as a new sensing modality.
        {{< /research-entry >}}

        {{< research-entry
          image="/images/research/icra25.png"
          image_alt="Inflated rotational joint for a soft robot"
          title="Anisotropic Stiffness and Programmable Actuation for Soft Robots Enabled by an Inflated Rotational Joint"
          citation="Sicheng Wang, Eugenio Frias-Miranda, Antonio Alvarez Valdivia, Laura H. Blumenschein, 2025 IEEE International Conference on Robotics and Automation (ICRA), 2025"
          pdf="/publication/icra25/Inflatable_Joint_ICRA_25.pdf"
        >}}
        Soft robots are known for their ability to perform tasks with great adaptability, enabled by their distributed, non-uniform stiffness and actuation. Bending is the most fundamental motion for soft robot design, but creating robust, and easy-to-fabricate soft bending joint with tunable properties remains an active problem of research. In this work, we demonstrate an inflatable actuation module for soft robots with a defined bending plane enabled by forced partial wrinkling. This lowers the structural stiffness in the bending direction, with the final stiffness easily designed by the ratio of wrinkled and unwrinkled regions. We show the stiffness properties of the actuation module through a first-principle model validated by experimental characterization, and demonstrate the module's ability to maintain the kinematic constraint over a large range of loading conditions. We illustrate how these properties give the potential for complex actuation in a soft continuum robot and for decoupling actuation force and efficiency from load capacity. The module provides a novel method for embedding intelligent actuation into soft pneumatic robots.
        {{< /research-entry >}}

        {{< research-entry
          image="/images/research/foldpam.jpg"
          image_alt="Folded pneumatic artificial muscle actuator"
          title="The Folded Pneumatic Artificial Muscle (foldPAM): Towards Programmability and Control via End Geometry"
          citation="Sicheng Wang, Eugenio Frias-Miranda, Laura H. Blumenschein, IEEE Robotics and Automation Letters, 8(3), 1383-1390, 2023"
          pdf="/publication/foldpam/foldPAM.pdf"
        >}}
        Soft pneumatic actuators have seen applications in many soft robotic systems, and their pressure-driven nature presents unique challenges and opportunities for controlling their motion. In this work, we present a new concept: designing and controlling pneumatic actuators via end geometry. We demonstrate a novel actuator class, named the folded Pneumatic Artificial Muscle (foldPAM), which features a thin-filmed air pouch that is symmetrically folded on each side. Varying the folded portion of the actuator changes the end constraints and, hence, the force-strain relationships. We investigated this change experimentally by measuring the force-strain relationship of individual foldPAM units with various lengths and amounts of folding. In addition to static-geometry units, an actuated foldPAM device was designed to produce continuous, on-demand adjustment of the end geometry, enabling closed-loop position control while maintaining constant pressure. Experiments with the device indicate that geometry control allows access to different areas on the force-strain plane and that closed-loop geometry control can achieve errors within 0.5% of the actuation range.
        {{< /research-entry >}}
    design:
      columns: '1'
---
