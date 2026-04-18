**Doppler, Time and Geometry in RF**

` `**Extracting Location, Motion and Truth from Radio Signals**


**Executive Summary**

Modern wireless and satellite systems derive far more than data bits from radio signals. By exploiting **Doppler shift**, **signal timing** and **geometric relationships** between transmitters and receivers, RF systems can estimate **location, velocity, synchronization and system state**, often under severe power, bandwidth and noise constraints.

This white paper explains how motion and time become information in RF systems, tracing the underlying physics and showing how these principles appear across **satellite navigation (GNSS)**, **search and rescue systems**, **radar**, **aviation surveillance** and **emerging autonomous platforms**. Rather than treating Doppler, Time of Arrival (ToA) and geometry as isolated techniques, we discuss them as manifestations of a unified idea: **space, time and frequency form the true information bearing dimensions of wireless systems**.

**Introduction**

When a satellite determines your location or tracks a moving object, it is not just decoding data, it is measuring time, motion and geometry.

When engineers think of wireless communication, the focus often lies on modulation schemes, coding and throughput. However, in many safety critical and sensing oriented systems, **the most valuable information is not the payload data but what the signal reveals about space and motion**.

A single RF transmission inherently carries:

- **Frequency information** → altered by relative motion (Doppler)

- **Time information** → altered by propagation delay and clock offsets <sup>A</sup> 

- **Spatial information** → constrained by geometry between nodes <sup>B</sup>

Systems that exploit these properties can locate aircraft, synchronize global clocks, track vehicles and rescue people in distress, sometimes with **no bidirectional communication at all**.

**Doppler Shift: Motion as a Measurement Tool**

**Physical Basis**

Doppler shift arises from relative motion between a transmitter and a receiver. If the distance between them changes over time, the observed frequency differs from the transmitted frequency.

For a carrier frequency f0, the Doppler shift Δfis approximately:

Δf = vrc f0

where:

- vr= relative radial velocity <sup>C</sup>

- c = speed of light

At RF and microwave frequencies, even modest velocities produce **measurable frequency shifts**.

**Doppler in Satellite Systems**

Low Earth orbit (LEO) satellites travel at ~7–8 km/s, producing Doppler shifts of several kHz at L-band (1–2 GHz, commonly used for satellite communications) frequencies. This effect is not a problem; it is used to extract information about motion.

In the **LEOSAR** (Low Earth orbit Search and Rescue) component of the COSPAS-SARSAT system:

- A stationary distress beacon transmits short bursts at 406.025 MHz

- As the satellite passes overhead, the received frequency traces a Doppler curve

- The curve shape encodes the beacon’s position relative to the satellite’s ground track

Doppler thus becomes a **fundamental tool for geolocation**, even without GPS data from the beacon.

**Ambiguity and Resolution**

A single Doppler pass does not uniquely determine the beacon’s location. Instead, it produces two possible locations, one on each side of the satellite’s ground track. This ambiguity arises because the Doppler measurement is symmetric about the satellite’s path.

Resolving this requires additional observations with different geometry. This can be achieved through:

- ` `A subsequent satellite pass with a different ground track

 

- Observations from another satellite with a different orbit

- ` `Embedded GNSS coordinates, which eliminate the ambiguity entirely

If the geometry remains unchanged, the ambiguity persists.

This illustrates a recurring principle: **Physics provides constraints; geometry resolves ambiguity.**

**Time as Information: Time of Arrival (ToA) and Time Difference of Arrival (TDoA)**

**Time of Arrival (ToA)**

The propagation delay of an RF signal encodes distance:

d=c⋅Δt\
In simple terms, the longer a signal takes to arrive, the farther it has travelled.

However, precise ToA measurement requires:

- Extremely accurate clocks

- Calibration of clock bias and drift

This is why timing, not bandwidth, is often the **hardest resource** in RF systems.

**GNSS Pseudorange**

In Global Navigation Satellite Systems such as **GPS** and **Galileo**:

- Satellites continuously transmit signals with precise timestamps

- A receiver measures when each signal arrives

- The time delay is used to estimate distance to each satellite

In simple terms: **Distance  =  speed of light × time delay**

**The complication arises** as the receiver’s clock is not perfectly synchronized with the satellites.** This means each measured distance is slightly incorrect. These are called **pseudoranges**.


Each measurement forms a **sphere of possible locations**. The receiver must lie somewhere on that sphere.

- 1 satellite → sphere (many possible positions)

- 2 satellites → intersection of spheres (a circle)

- 3 satellites → two possible points

- 4 satellites → unique position + clock correction


Intersection of four or more spheres yields:

- 3D position

- Receiver clock offset

GNSS positioning is thus **a time synchronization problem disguised as navigation**.

**Time Difference of Arrival (TDoA)**

In TDoA systems, location is found by comparing when a signal reaches different receivers. Unlike ToA, the transmitter does not need to be synchronized.

- Multiple receivers detect the same signal

- Each receiver records its arrival time

- The differences in arrival times are used to estimate position

TDoA does not measure distance. It measures **how much closer the signal is to one receiver than another**

Each time difference gives one constraint on where the transmitter could be. Position is found by combining multiple such constraints from different receiver pairs.

This principle underlies:

- Passive RF localization
- ADS-B multilateration
- Cellular positioning (OTDOA)

TDoA does not directly tell you where something is. It tells you where it cannot be and position emerges from combining multiple constraints.

Here again, **geometry dominates accuracy** more than raw signal strength.

**Geometry: The Silent Determinant of Accuracy**

**Geometric Dilution of Precision (GDOP)**

Even perfect measurements can yield poor location estimates if geometry is unfavourable.  For example, imagine trying to locate a point using three satellites that are all close together in the same part of the sky.

Even if the distance to each satellite is measured perfectly, the intersection of those measurements is poorly defined. Small errors or uncertainties spread out into a large region of possible positions. Now consider the same measurements with satellites spread widely across the sky. The intersections become much sharper and the position can be determined much more precisely. 

The measurements have not changed, only the geometry has. GDOP quantifies how the geometry of satellites or receivers amplifies small measurement errors into position errors.

Key insight:

**Measurement quality matters less than measurement geometry.** <sup>D</sup>

A common misconception is that poor geometry can be compensated by higher power, bandwidth, or more advanced algorithms; this is discussed explicitly in Appendix D.

This explains why:

- MEOSAR outperforms LEOSAR
- Multi constellation GNSS improves robustness
- Distributed receivers outperform centralized ones

**MEOSAR as a Geometric Revolution**

By placing SAR payloads on multiple GNSS constellations, **MEOSAR** achieves:

- Continuous global coverage
- Diverse viewing angles
- Faster and more accurate solutions

This improvement stems primarily from **geometry**, not higher transmit power or bandwidth.

**Unifying View: One Physics, Many Systems**

|**System**|**Uses Doppler**|**Uses Time**|**Uses Geometry**|
| :- | :- | :- | :- |
|LEOSAR|✓|✓|✓|
|GNSS|✗ (primary)|✓|✓|
|Radar|✓|✓|✓|
|ADS-B MLAT|✗|✓|✓|
|Passive RF sensing|✓|✓|✓|

Despite different applications, these systems share the same core idea:

**RF signals are probes of spacetime, not just carriers of data.**	

**Conclusion**

Designing RF systems involves balancing fundamental constraints like Frequency stability, Time accuracy, Power consumption, Geometry, Infrastructure complexity, Costs etc. Understanding Doppler, time and geometry is essential for working on realworld RF systems. These fundamentals remain constant even as modulation schemes, protocols and technology evolve.

Doppler shift, signal timing and geometry are not secondary effects in RF systems, they are **primary sources of information**. Systems that harness these dimensions can locate, track, synchronize and rescue with remarkable efficiency, without the need for high data rates or continuous communication.

As wireless systems move toward greater autonomy and resilience, engineers who understand how **space and time are encoded in RF** will remain indispensable.







<sup>Appendix A</sup>

**Clock Offsets in RF Systems**

**What Is a Clock Offset?**

A **clock offset** is the difference between the time indicated by a local clock and a reference (or “true”) clock.

For example:

- Reference time: **12:00:00.000000**
- Local clock time: **12:00:00.000120**

The clock offset is therefore **+120 microseconds**.

Formally,

Clock Offset=tlocal clock-treference clock

In RF systems, clock offsets are not abstract timing discrepancies. Because electromagnetic waves propagate at the speed of light, even very small timing offsets translate directly into **physical errors in distance, velocity, or position**.

**Why Clock Offsets Matter in RF**

Radio waves propagate at approximately:

c≈3×108 m/s

As a result, time error maps directly into distance error:

|**Time Error**|**Distance Error**|
| :- | :- |
|1 second|300,000 km|
|1 millisecond|300 km|
|1 microsecond|300 m|
|1 nanosecond|0\.3 m|

A **100 nano second clock offset corresponds to approximately 30 meters of position error**.

This is why clock offsets are **not bookkeeping errors**, they are **physical errors** that fundamentally limit the performance of RF based navigation, localization, radar, and sensing systems.

**Example 1: GNSS (GPS and Galileo)**

In Global Navigation Satellite Systems such as **GPS** and **Galileo**:

- Satellites are equipped with highly stable **atomic clocks**
- User receivers rely on comparatively low cost **quartz oscillators**

Each satellite transmits a navigation signal that includes a timestamp indicating when the signal was transmitted:

*“This signal was transmitted at time* Ts*”*

The receiver records the arrival time of the signal using its local clock:

*“This signal was received at time* Tr*”*

Because the receiver’s clock is not synchronized to satellite time, it contains an unknown offset Δt. As a result, the measured range, known as the **pseudo range** is given by:

ρi=c(Tr-Ts+Δt)

The true geometric relationship for satellite ican be written as:

ρi=x-xi)2+(y-yi)2+(z-zi)2+c Δt

Here:

- xyzare the unknown receiver position coordinates
- xiyiziare the **known satellite positions**, computed by the receiver from **ephemeris data broadcast within the satellite’s navigation message**
- Δt is the unknown receiver clock offset

Each satellite continuously broadcasts its own orbital parameters (ephemeris), allowing the receiver to compute the satellite’s position at the exact time of signal transmission.

To determine its position, the receiver simultaneously solves for **four unknowns**:

- The three dimensional position xyz
- The receiver clock offset Δt

Each tracked satellite provides one independent equation. With signals from **four or more satellites**, the receiver forms a system of equations and solves it iteratively using linearization and least squares estimation. This process jointly refines the position estimate and corrects the receiver’s clock offset.

As a result, a minimum of **four satellites** is required to obtain a position fix.

A key insight follows:

**GNSS is as much a clock calibration system as it is a positioning system.**

**Example 2: Doppler Based Location in LEOSAR (COSPAS-SARSAT)**

In Doppler based search and rescue systems operated under the **COSPAS-SARSAT** framework:

- Distress beacons are **not time synchronized** to satellites
- Location is inferred from **frequency shift as a function of time**, rather than absolute timestamps

Each beacon transmission is time stamped relative to the **satellite’s onboard clock**, not the beacon’s clock. Clock offsets influence:

- The apparent timing of received bursts
- The estimated time of closest satellite approach
- The inferred ground position of the beacon

These effects are mitigated through:

- Observation of multiple bursts
- Highly stable satellite clocks
- Accurate satellite ephemerides
- Multi pass and multi satellite processing

In this context, clock offsets are **managed statistically rather than explicitly eliminated**.

**Example 3: Radar Range Measurement**

In **monostatic radar** systems:

- The same clock triggers pulse transmission
- The same clock measures echo return time

Because transmission and reception share a common time reference, **clock offset is irrelevant**. What matters instead is **clock stability and jitter**.

In **bistatic or multistatic radar** systems:

- Transmission and reception occur at different locations
- Independent clocks introduce clock offsets

These offsets appear as **false range or position errors** and must be:

- Pre calibrated,
- Continuously estimated, or
- Eliminated using Time Difference of Arrival (TDoA) techniques

**Example 4: Cellular and ADS-B Multilateration**

In **TDoA based localization systems**:

- The transmitter clock may be unknown or unsynchronized
- Receiver clocks must be tightly synchronized with each other

If two receivers differ by **50 nanoseconds**, the resulting localization error is approximately **15 meters**.

Such systems address clock offsets using:

- GNSS disciplined oscillators
- Network based time distribution
- Continuous estimation and correction of clock offsets

Here, clock offset becomes a **network level engineering problem**, not merely a device level one.

**Clock Offset vs Clock Drift**

Clock offset and clock drift are related but distinct:

|**Concept**|**Meaning**|
| :- | :- |
|**Clock Offset**|Instantaneous difference between clocks|
|**Clock Drift**|Rate at which the offset changes over time|

A clock may exhibit:

- Large offset but negligible drift (stable but wrong)
- Small offset but high drift (accurate now, incorrect later)

High performance RF systems must estimate and compensate for **both offset and drift**.

**Relativistic Time Dilation in Satellite Systems**

In satellite navigation systems such as **GPS** and **Galileo**, clock offsets arise not only from oscillator imperfections but also from **relativistic effects**.

Two effects contribute:

1. **Special Relativity (velocity effect):**

   GNSS satellites move at approximately 3.9 km/s. Due to their velocity relative to Earth, onboard clocks run slightly **slower** than clocks on Earth’s surface.

1. **General Relativity (gravitational effect):**

   GNSS satellites orbit at an altitude of ~20,000 km, where Earth’s gravitational field is weaker. Clocks in weaker gravity run **faster** than clocks on Earth’s surface.

For GNSS satellites, the gravitational effect dominates. The net result is that satellite clocks run approximately **38 microseconds per day faster** than Earth based clocks.

If uncorrected, this would lead to position errors on the order of **10 kilometres per day**, rendering the system unusable.

To address this:

- Satellite clock frequencies are pre adjusted before launch
- Relativistic correction terms are included in navigation message models
- Residual offsets are continuously estimated by receivers

GNSS is therefore a rare example of **relativistic physics being engineered directly into an operational RF system**.

**Key Insight**

Understanding clock offsets from this perspective transforms how engineers think about navigation, Doppler localization, radar, multilateration and resilient wireless systems. This insight remains valid regardless of modulation scheme, protocol, or application domain.





























<sup>Appendix B</sup>

**Spatial Information and Geometry in RF Systems**

**What Is Spatial Information in RF?**

In RF systems, **spatial information** refers to what a received signal reveals about the **possible location of a transmitter or receiver**.

Unlike payload data, spatial information is **implicit**. It is not transmitted intentionally as bits, but is inferred from physical properties of signal propagation such as:

- Arrival time
- Frequency shift
- Angle of arrival
- Signal phase relationships

Crucially, **a single RF measurement never specifies a unique position**. Instead, it defines a **set of possible locations** consistent with that measurement.

Spatial information therefore appears not as a point, but as a **geometric constraint**.

**Geometry as a Constraint, not a Coordinate**

Every RF measurement constrains position to a geometric shape:

|**Measurement Type**|**Geometric Constraint**|
| - | - |
|Time of Arrival (ToA)|Circle (2D) or sphere (3D)|
|Time Difference of Arrival (TDoA)|Hyperbola|
|Doppler shift|Locus of constant radial velocity|
|Angle of Arrival (AoA)|Line or cone|
|Phase difference|Set of phase consistent points|

A position estimate emerges only when **multiple constraints intersect**.

This leads to a central principle:

**Spatial information is created by the intersection of geometric constraints, not by any single measurement.**

**Single Node Geometry: Weak Spatial Information**

Consider a receiver measuring the propagation delay of a signal from one transmitter.

- The measured delay gives distance
- Direction is unknown

The transmitter is constrained to lie on:

- A **circle** in two dimensions
- A **sphere** in three dimensions

This provides spatial information, but it is **weak**: infinitely many positions satisfy the constraint.

No amount of transmit power, bandwidth, or signal processing can eliminate this ambiguity with a single node.

**Multi Node Geometry: Constraint Intersection**

Adding more nodes strengthens spatial information:

- **Two nodes** → two geometric constraints → two possible locations
- **Three nodes** → three constraints → unique solution (in ideal geometry)
- **Four or more nodes** → redundancy and robustness

This is the basis of:

- GNSS trilateration
- Multilateration in aviation surveillance
- Distributed sensor networks

However, **node placement matters as much as node count**.

**Geometry Quality and Error Amplification**

Even with perfect measurements, poor geometry leads to poor position estimates.

This phenomenon is captured by **Geometric Dilution of Precision (GDOP)**.

Key observations:

- Nodes clustered together produce shallow intersection angles
- Small measurement errors project into large position errors
- Widely spaced nodes produce sharper intersections and better accuracy

This leads to a critical insight:

**Measurement accuracy does not determine position accuracy, geometry does.**

**Spatial Information in Doppler Based Systems**

Doppler measurements do not yield distance. They constrain position based on **relative motion**.

A single Doppler measurement restricts the transmitter to a **locus of points** with identical radial velocity relative to the receiver.

In systems such as LEOSAR:

- Each satellite pass produces a Doppler curve
- The curve constrains the beacon location relative to the satellite’s ground track
- Multiple passes or additional geometry resolve ambiguity

Here, spatial information arises from **motion induced geometry**, not static range.

**Spatial Information in Time Difference Systems**

In Time Difference of Arrival (TDoA) systems:

- Absolute transmission time is unknown
- Differences in arrival time between receivers are measured

Each TDoA measurement constrains the transmitter to a **hyperbolic surface**.

Position estimation requires:

- Multiple receivers
- Accurate inter receiver synchronization
- Favourable geometry

Again, the solution emerges from **constraint intersection**, not from time alone.

**Why Geometry Cannot Be “Fixed” by Signal Processing**

Poor geometry cannot be compensated by:

- Higher transmit power
- Wider bandwidth
- Better modulation
- More advanced algorithms

These improve **measurement quality**, but geometry determines **how errors map into space**.

This explains why:

- MEOSAR outperforms LEOSAR
- Multi constellation GNSS improves robustness
- Distributed receiver networks outperform centralized ones

Geometry is a **structural property of the system**, not a tuneable parameter.

**Spatial Information as a System Design Variable**

In modern RF systems, geometry is often **engineered deliberately**:

- Satellite constellation design
- Receiver placement in multilateration networks
- UAV swarm formations
- Sensor network topology

Designers increasingly optimize **geometry first**, then refine timing and frequency accuracy.

This represents a shift from component level optimization to **system level spatial thinking**.

**Key Insight**

**Spatial information in RF systems does not come from knowing where something is, it comes from knowing where it cannot be.** Each RF measurement eliminates regions of space. Position emerges where all constraints are simultaneously satisfied. Understanding spatial information as a geometric constraint problem unifies Doppler, timing, angle and multilateration methods under a single conceptual framework.





































<sup>Appendix C</sup>

**Relative Velocity and Relative Radial Velocity in RF Systems**

**Relative Velocity**

**Relative velocity** describes the velocity of one object as observed from another object.

If:

- Object A (e.g., a satellite) has velocity vector vA
- Object B (e.g., a ground based distress beacon) has velocity vector vB

then the relative velocity of B with respect to A is:

vrel=vB-vA

Relative velocity is a **vector quantity**:

- It has both **magnitude** (speed) and **direction**
- It fully describes how one object appears to move relative to the other in three dimensional space

Relative velocity by itself is **not** what appears in the Doppler formula.

**Relative Radial Velocity**

**Relative radial velocity** is the component of the relative velocity that lies **along the line connecting the transmitter and the receiver**, also called the **line of sight**.

In physical terms, relative radial velocity answers one specific question:

*How fast is the distance between the transmitter and receiver changing?*

Key characteristics:

- It is a **scalar quantity**, not a vector
- It can be **positive or negative**
  - Positive → distance increasing (moving apart)
  - Negative → distance decreasing (moving closer)
- Only this component affects Doppler shift

Mathematically, if:

- r** is the **unit vector** pointing along the line of sight
- vrel is the relative velocity vector

then the relative radial velocity is:

vradial = vrel⋅r

This operation is a **projection** of the relative velocity onto the line of sight.

**Relative Velocity vs. Relative Radial Velocity**

|**Term**|**Type**|**What it describes**|**Used in Doppler?**|
| - | - | - | - |
|Velocity|Vector|Speed and direction of a single object|No|
|Relative velocity|Vector|Motion of one object as seen from another|No (only a component is used)|
|Relative radial velocity|Scalar|Rate of change of distance along line of sight|**Yes**|

Example interpretations:

- A satellite speed of 7.5 km/s is a **velocity**
- A beacon appearing to move sideways at 2 km/s relative to a satellite is **relative velocity**
- The distance between them shrinking at 1.8 km/s is **relative radial velocity**


**Why Doppler Depends Only on the Radial Component**

The Doppler shift in RF systems is approximately:

Δf ≈ vradialc f0\
where:

- vradial =  relative radial velocity
- c =  speed of light
- f0 =  transmitted carrier frequency

Only motion **along the line of sight** compresses or stretches the electromagnetic wavefronts.

Motion **perpendicular** to the line of sight:

- Changes position
- Does **not** change distance
- Produces **no Doppler shift**

This explains an important physical fact:

**Doppler is sensitive to how fast two objects approach or recede, not how fast they move sideways.**

**Intuitive Examples**

**Satellite passing over a distress beacon (LEOSAR context)**

- Satellite approaches the beacon → radial velocity is negative
- At closest approach → radial velocity is zero
- Satellite moves away → radial velocity becomes positive

This change in sign produces the characteristic **S shaped Doppler curve** used for location estimation.

**Aircraft and radar**

- Aircraft flying directly toward radar → maximum Doppler shift
- Aircraft flying perpendicular to radar beam → near zero Doppler shift

In both cases, the difference arises purely from **geometry**, not speed.

**Key Insight**

**Relative velocity describes how objects move in space. Relative radial velocity describes how distance changes. Doppler responds only to the latter.**

This distinction is essential for understanding:

- Doppler based localization
- Satellite search and rescue systems
- Radar and passive RF sensing
- Why geometry governs Doppler observability

**Relative radial velocity is the line of sight component of relative motion and it is the only part of motion that produces Doppler shift in RF systems.**



















<sup>Appendix D</sup>

**Why Power, Bandwidth, and Algorithms Cannot Fix Poor Geometry**

**The Common Misconception**

A natural assumption, especially for engineers early in their careers is that poor positioning performance can always be improved by:

- Increasing transmit power
- Increasing bandwidth
- Improving signal to noise ratio (SNR)
- Using more advanced signal processing or algorithms

While these improvements enhance **measurement quality**, they **cannot compensate for poor geometry**.

This appendix explains why.

**Measurement Accuracy vs. Position Accuracy**

RF based localization systems rely on measurements such as:

- Time of arrival
- Time difference of arrival
- Doppler shift
- Angle of arrival

Each measurement has some error. Improving power, bandwidth, or processing reduces this **measurement error**.

However, **position accuracy** depends on how these measurement errors project into physical space. That projection is governed by **geometry**.

If geometry is poor, even very small measurement errors can result in large position errors.

**Thought Experiment: Perfect Measurements, Bad Geometry**

Imagine a GNSS receiver with:

- Perfect clocks
- Zero measurement noise
- Infinite bandwidth
- Ideal signal processing

Now imagine that all visible satellites are clustered in one part of the sky.

Result:

- The receiver can measure distances extremely accurately
- But small uncertainties map into large position ambiguity along poorly constrained directions

Despite “perfect” measurements, the position estimate remains weak.

This is a geometric limitation, not a signal processing limitation.

**The Opposite Case: Noisy Measurements, Good Geometry**

Now consider the opposite scenario:

- Modest SNR
- Limited bandwidth
- Noisy timing measurements
- But satellites or receivers are widely separated in space

Result:

- Each measurement constrains position from a different direction
- Errors intersect sharply rather than shallowly
- The final position estimate is often usable and stable

This is why real world systems often prioritize **node placement and constellation design** over raw link performance.

**Why Algorithms Cannot “Fix” Geometry**

Advanced algorithms (least squares, Kalman filters, particle filters, AI based estimators) can:

- Reduce noise
- Fuse measurements over time
- Reject outliers
- Improve robustness

What they **cannot** do is:

- Create new spatial constraints that do not exist
- Change the relative placement of transmitters and receivers

Algorithms operate **within** the geometry; they do not replace it.

**System Level Consequences**

This principle explains several real world observations:

- MEOSAR outperforms LEOSAR primarily due to better geometry
- Multi constellation GNSS improves robustness even without higher power
- Distributed receiver networks outperform centralized ones
- UAV swarms benefit more from formation design than transmit power increases

In all cases, geometry is a **first order design variable**, not a secondary concern.

**Key Insight**

Understanding this distinction is essential for designing resilient RF systems, especially in safety critical, autonomous, and low SNR environments. **You can refine measurements indefinitely, but you cannot overcome poor geometry without changing where nodes are placed.**
