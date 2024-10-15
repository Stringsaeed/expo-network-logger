import ExpoModulesCore
import SwiftUI

// This view will be used as a native component. Make sure to inherit from `ExpoView`
// to apply the proper styling (e.g. border radius and shadows).
class ExpoNetworkLoggerView: ExpoView {
    private let contentView: UIHostingController<PulseLoggerSwiftUIView>
    
    required init(appContext: AppContext? = nil) {
        contentView = UIHostingController(rootView: PulseLoggerSwiftUIView())
        
        super.init(appContext: appContext)
        
        clipsToBounds = true
        addSubview(contentView.view)
    }

    override func layoutSubviews() {
        contentView.view.frame = bounds
    }
}
