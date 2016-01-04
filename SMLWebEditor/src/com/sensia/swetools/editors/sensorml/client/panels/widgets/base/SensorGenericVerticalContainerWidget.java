package com.sensia.swetools.editors.sensorml.client.panels.widgets.base;

import com.google.gwt.user.client.ui.Panel;
import com.google.gwt.user.client.ui.VerticalPanel;
import com.sensia.swetools.editors.sensorml.client.panels.widgets.AbstractSensorElementWidget;
import com.sensia.swetools.editors.sensorml.client.panels.widgets.ISensorWidget;

/**
 * Generic horizontal container
 * @author mathieu dhainaut
 *
 */
public class SensorGenericVerticalContainerWidget extends AbstractSensorElementWidget{

	protected VerticalPanel container;
	protected VerticalPanel innerContainer;
	
	public SensorGenericVerticalContainerWidget(String name, TAG_DEF def, TAG_TYPE type) {
		super(name, def, type);
		container = new VerticalPanel();
		container.setSpacing(5);
		//container.addStyleName("swe-property-panel");
	}

	@Override
	public Panel getPanel() {
		return container;
	}

	@Override
	protected void addSensorWidget(ISensorWidget widget) {
		container.add(widget.getPanel());
	}

	@Override
	protected void activeMode(MODE mode) {
		// TODO Auto-generated method stub
		
	}

	@Override
	protected AbstractSensorElementWidget newInstance() {
		return new SensorGenericVerticalContainerWidget(getName(),getDef(),getType());
	}
}
